// import "@/styles/globals.scss";

import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";

import ProviderWrapper from "@/providers";

export const metadata: Metadata = {
  title: "eRA Web Portal",
  description: "eRA Web Portal",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>
        <CssBaseline />
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
