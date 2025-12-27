"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  readonly children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
