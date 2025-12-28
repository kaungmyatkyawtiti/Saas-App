import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export default function SignIn() {
  return (
    <SignInButton>
      <button>
        <LogIn className="h-7 w-7 rounded-full" />
      </button>
    </SignInButton>
  );
}
