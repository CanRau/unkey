import { User } from "@workos-inc/node";

type LocalUser = {
  // add properties for default Unkey local user 
}
export interface Auth<T> {
  [x: string]: any;
  // If there is none, it must trigger a redirect to the sign in page.
  getOrgId(): Promise<T>;

  // called in trpc, it returns just enough to know who's talking to us
  getSession(): Promise<{ userId: string; orgId: string } | null>;

  // called in RSC, giving us some display data for the user
  getUser(): Promise<any | null>;

  listOrganizations(): Promise<T>;

  // sign the user into a different workspace/organisation
  signIn(orgId?: string): Promise<T>;

  signOut(): Promise<T>;

  // update name, domain or picture
  updateOrg(org: Partial<T>): Promise<T>;
}
