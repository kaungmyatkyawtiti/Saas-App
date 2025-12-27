import cn from "@/utils/cn";
import { ReactNode } from "react"

interface FieldBoxProps {
  children: ReactNode;
  className?: string;
  error?: string;
}

export default function FieldBox({
  children,
  className,
  error,
}: FieldBoxProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        className
      )}
    >
      {children}
      {
        error &&
        <span className="text-sm text-destructive font-medium ml-5">
          {error}
        </span>
      }
    </div>
  )
}
