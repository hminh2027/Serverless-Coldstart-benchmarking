"use client";

import type { PropsWithChildren } from "react";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
