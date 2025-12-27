"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import ThemedBtn from "./ThemedBtn";

const ModeToggle = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  console.log("theme", theme);
  console.log("systemTheme", systemTheme);

  const handleSwitch = () => setTheme(currentTheme === "dark" ? "light" : "dark");

  if (!mount) return <ThemedBtn />

  return (
    <button
      onClick={handleSwitch}
      type="button"
      className="navBtn"
    >
      <Moon
        size={24}
        className="dark:hidden"
      />
      <Sun
        size={24}
        className="hidden dark:block"
      />
    </button>
  )
};

export default ModeToggle;
