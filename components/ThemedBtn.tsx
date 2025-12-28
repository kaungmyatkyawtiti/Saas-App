"use client";

import { Moon, Sun } from "lucide-react";

function ThemedBtn() {
  return (
    <button
      className="navBtn"
    >
      {/* when theme is dark, hide this */}
      <Moon
        size={26}
        data-hide-on-theme="dark"
      />

      {/* when theme is light, hide this */}
      <Sun
        size={26}
        data-hide-on-theme="light"
      />
    </button>
  )
}

export default ThemedBtn; 
