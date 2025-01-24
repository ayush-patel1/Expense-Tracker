
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// const geistSansFont = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Smart Finance",
  description: "AI powered financial advisor",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
     publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "default_publishable_key"}
    >
      <html lang="en">
        <body >{children}</body>
      </html>
    </ClerkProvider>
  );
}
