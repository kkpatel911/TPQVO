import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tpqvo.com"),
  title: "TPQVO | Your Credentialing Partner",
  description: "TPQVO provides credentials verification services for hospitals, surgery centers, healthcare networks, and medical practices.",
  openGraph: {
    title: "TPQVO | Your Credentialing Partner",
    description: "Credentials verification services for healthcare organizations since 1998.",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "TPQVO — Your Credentialing Partner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPQVO | Your Credentialing Partner",
    description: "Credentials verification services for healthcare organizations since 1998.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
