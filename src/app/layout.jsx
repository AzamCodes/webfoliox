import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "./components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Personal Portfolio Website",
  icons: {
    icon: "/favicon.ico", // Reference to your favicon
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
