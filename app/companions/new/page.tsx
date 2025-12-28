import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function NewCompanion() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="max-w-2xl mx-auto my-10 px-6">
      <h2 className="text-2xl font-bold tracking-tight mb-6">
        Companion Builder
      </h2>

      <CompanionForm />
    </div >
  )
}

