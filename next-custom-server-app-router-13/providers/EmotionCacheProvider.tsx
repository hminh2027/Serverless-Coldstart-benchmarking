import type { PropsWithChildren } from "react";

import { CacheProvider } from "@emotion/react";

import createEmotionCache from "@/utils/createEmotionCache";

export const EmotionCacheProvider = ({ children }: PropsWithChildren) => {
  const emotionCache = createEmotionCache();

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};
