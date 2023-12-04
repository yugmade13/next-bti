import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={clsx(
        "bg-background font-sans antialiased",
        fontSans.variable,
      )}
    >
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          <section className="flex flex-col items-center justify-center gap-4 py-4">
            <div className="inline-block w-full text-center justify-center">
              {children}
            </div>
          </section>
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/yugmade13"
            title="Github"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">Yugma Dewangga</p>
          </Link>
        </footer>
      </div>
    </Providers>
    </body>
    </html>
  );
}
