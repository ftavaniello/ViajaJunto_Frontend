import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViajaJunto",
  description: "Planejamento colaborativo de viagens.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
