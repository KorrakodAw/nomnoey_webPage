import type { Metadata } from "next"; // <--- IMPORT THIS
import { Prompt } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const prompt = Prompt({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
});

// --- PASTE YOUR METADATA HERE ---
export const metadata: Metadata = {
  title: "NomNoey Dessert&Cafe'",
  description: "หนมเนย - Dessert, Drinks & Good Vibes in Lamphun",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${prompt.className} bg-[#fdfbf7]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
