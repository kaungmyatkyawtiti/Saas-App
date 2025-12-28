"use client";

import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SignIn from "./SignIn";

export default function ClerkLogin() {
  const { user } = useUser();

  console.log("user", user);
  return (
    <div className="h-7 w-7 flex items-center justify-center">
      <ClerkLoading>
        <div className="h-7 w-7 rounded-full bg-black/20 dark:bg-white/25" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignedIn>
          <UserButton
            fallback={<div className="h-7 w-7 rounded-full" />}
            appearance={{
              elements: {
                avatarBox: "h-7 w-7",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </ClerkLoaded>
    </div>
  )
}
