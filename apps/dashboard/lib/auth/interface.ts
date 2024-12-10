import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const UNKEY_SESSION_COOKIE = "unkey-session";
export type OAuthStrategy = "google" | "github";

export interface SignInViaOAuthOptions {
    redirectUrl?: string,
    redirectUrlComplete: string,
    provider: OAuthStrategy
}

export interface MiddlewareConfig {
  enabled: boolean;
  publicPaths: string[];
  cookieName: string;
  loginPath: string;
}

export interface AuthSession {
  userId: string;
  orgId: string | null;
  [key: string]: any;
}

export interface CookieOptions {
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
  path?: string;
}

export interface AuthCookie {
  name: string;
  value: string;
  options: CookieOptions;
}

export interface BaseAuthResponse {
  success: boolean;
  redirectTo: string;
  cookies: AuthCookie[];
}

interface OAuthSuccessResponse extends BaseAuthResponse {
  success: true;
}

interface OAuthErrorResponse extends BaseAuthResponse {
  success: false;
  error: Error;
}

export type OAuthResult = OAuthSuccessResponse | OAuthErrorResponse;

export type Organization = {
  orgId: string,
  name: string
}

export const DEFAULT_MIDDLEWARE_CONFIG: MiddlewareConfig = {
  enabled: true,
  publicPaths: ['/auth/sign-in', '/auth/sign-up', '/favicon.ico'],
  cookieName: UNKEY_SESSION_COOKIE,
  loginPath: '/auth/sign-in'
};

export interface AuthProvider<T = any> {
  [key: string]: any;
  validateSession(token: string): Promise<AuthSession | null>;
  getCurrentUser(): Promise<any | null>;
  listMemberships(): Promise<T>;
  signUpViaEmail(email: string): Promise<any>;
  signIn(orgId?: string): Promise<T>;
  signInViaOAuth(options: SignInViaOAuthOptions): String;
  completeOAuthSignIn(callbackRequest: Request): Promise<OAuthResult>;
  signOut(): Promise<T>;
  updateTenant(org: Partial<T>): Promise<T>;
}

export abstract class BaseAuthProvider implements AuthProvider {
  constructor(protected config: any = {}) {}
  [key: string]: any;

  // Public abstract methods that must be implemented
  // these are the functions that the app interacts with regardless of the provider details
  abstract validateSession(token: string): Promise<AuthSession | null>;
  abstract getCurrentUser(): Promise<any | null>;
  abstract listMemberships(): Promise<any>;
  abstract signUpViaEmail(email: string): Promise<any>;
  abstract signInViaOAuth(options: SignInViaOAuthOptions): string;
  abstract completeOAuthSignIn(callbackRequest: Request): Promise<OAuthResult>;
  abstract signIn(orgId?: string): Promise<any>;
  abstract signOut(): Promise<any>;
  abstract updateTenant(org: Partial<any>): Promise<any>;

  // Protected methods available to AuthProvider client classes that extend the base class, like `WorkOSAuthProvider`
  // Can be utilized in implementation details
  // May not always have the request, so if one isn't passed in, use `cookies()`

  protected async getSession(request?: NextRequest, cookieName: string = UNKEY_SESSION_COOKIE) {
    const cookieStore = request ? request.cookies : cookies();
    const sessionData = cookieStore.get(cookieName)?.value;
    return sessionData ?? null;
  }

  // Private utility methods
  // These have zero dependencies on implementation details, and they don't need to be re-implemented
  // so its fine to encapsulate them within the base provider since they aren't called from a implementation

  private isPublicPath(pathname: string, publicPaths: string[]): boolean {
    const isPublic = publicPaths.some(path => pathname.startsWith(path));
    console.debug('Checking public path:', { pathname, publicPaths, isPublic });
    return isPublic;
  }

  private redirectToLogin(request: NextRequest, config: MiddlewareConfig): NextResponse {
    const signInUrl = new URL(config.loginPath, request.url);
    signInUrl.searchParams.set('redirect', request.nextUrl.pathname);
    const response = NextResponse.redirect(signInUrl);
    response.cookies.delete(config.cookieName);
    return response;
  }

  // Public methods with implementation
  // Doesn't need to be implemented by the AuthProvider client classes
  // but needs to be available publicly to be accessed by Next.js middleware
  public createMiddleware(config: Partial<MiddlewareConfig> = {}) {
    const middlewareConfig = {
      ...DEFAULT_MIDDLEWARE_CONFIG,
      ...config
    };

    return async (request: NextRequest): Promise<NextResponse> => {
      if (!middlewareConfig.enabled) {
        return NextResponse.next();
      }

      const { pathname } = request.nextUrl;
      console.debug('Middleware processing:', {
        url: request.url,
        pathname,
        publicPaths: middlewareConfig.publicPaths
      });

      if (this.isPublicPath(pathname, middlewareConfig.publicPaths)) {
        console.debug('Public path detected, proceeding without auth check');
        return NextResponse.next();
      }

      try {
        const token = await this.getSession();
        if (!token) {
          console.debug('No session token found, redirecting to login');
          return this.redirectToLogin(request, middlewareConfig);
        }
        const session = await this.validateSession(token);
        if (!session) {
          console.debug('No validated session found, redirecting to login');
          return this.redirectToLogin(request, middlewareConfig);
        }

        console.debug('Valid session found, proceeding');
        return NextResponse.next();
      } catch (error) {
        console.error('Authentication middleware error:', {
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          url: request.url,
          pathname
        });
        return this.redirectToLogin(request, middlewareConfig);
      }
    };
  }
}