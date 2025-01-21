import type { Metadata } from "next";
import { Header } from "@/components/shared/header";


export const metadata: Metadata = {
  title: "Next Conditions | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        >
          <main className="min-h-screen">
          <Header></Header>
          {children}
          </main>
      </body>
    </html>
  );
}
