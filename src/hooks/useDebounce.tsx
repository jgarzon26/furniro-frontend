'use client';

import { useRef } from "react";

export const useDebounce = (duration = 500) => {
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const debounce = (onFinish: () => void, ) => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      onFinish();
    }, duration);
  }

  return debounce;
}