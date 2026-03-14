'use client';

import { FC, PropsWithChildren } from "react";
import ShopOptionsProvider from "@/providers/ShopOptionsProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/client";

const Providers: FC<PropsWithChildren> = ({children}) => {
  const queryClient = getQueryClient();

  return ( 
    <ShopOptionsProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ShopOptionsProvider>
  );
}

export default Providers;