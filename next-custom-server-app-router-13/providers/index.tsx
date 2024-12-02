"use client";

import type { PropsWithChildren } from "react";

import { EmotionCacheProvider } from "./EmotionCacheProvider";
import { MuiProvider } from "./MuiProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";

export default function ProviderWrapper({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <ReactQueryProvider>
      <EmotionCacheProvider>
        <MuiProvider>{children}</MuiProvider>
      </EmotionCacheProvider>
    </ReactQueryProvider>
  );
}
