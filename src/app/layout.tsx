import { Onest } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./(marketing)/components/providers/convex-provider";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-onest",      // optional: CSS variable for Tailwind/custom CSS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.variable}>
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
