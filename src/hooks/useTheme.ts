'use client';

import { useEffect, useState } from "react";

enum Mode {
  light,
  dark,
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Mode>(() => Mode[(localStorage.getItem('theme') || 'light') as keyof typeof Mode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(...Object.keys(Mode));
    root.classList.add(theme.toString());
    localStorage.setItem('theme', theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Mode.light ? Mode.dark : Mode.light));
  }

  return { theme, toggleTheme };
}