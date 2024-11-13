"use client";
import { Loading } from "@/components/dashboard/loading";
import { GitHub, Google } from "@/components/ui/icons";
import { toast } from "@/components/ui/toaster";
import { auth } from "@/lib/auth/index";
import { OAuthStrategy } from "@/lib/auth/interface";
import * as React from "react";
import { OAuthButton } from "../oauth-button";
import { LastUsed, useLastUsed } from "./last_used";

export const OAuthSignIn: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const [lastUsed, setLastUsed] = useLastUsed();

  const oauthSignIn = async (provider: OAuthStrategy) => {
    try {
      setIsLoading(provider);
      auth.signInViaOAuth({
        provider,
        redirectUri: "/auth/sso-callback",
      });
      setLastUsed(provider);
    } catch (err) {
      console.error(err);
      setIsLoading(null);
      toast.error((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <OAuthButton onClick={() => oauthSignIn("github")}>
        {isLoading === "github" ? (
          <Loading className="w-6 h-6" />
        ) : (
          <GitHub className="w-6 h-6" />
        )}
        GitHub {lastUsed === "github" ? <LastUsed /> : null}
      </OAuthButton>
      <OAuthButton onClick={() => oauthSignIn("google")}>
        {isLoading === "google" ? (
          <Loading className="w-6 h-6" />
        ) : (
          <Google className="w-6 h-6" />
        )}
        Google {lastUsed === "google" ? <LastUsed /> : null}
      </OAuthButton>
    </div>
  );
};
