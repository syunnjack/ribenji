import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import "./recommend.css";
import "./taste.css";
import "./system.css";
import "./review.css";

const sans = Noto_Sans_JP({ variable: "--font-sans", subsets: ["latin"] });
const serif = Shippori_Mincho({ variable: "--font-serif", weight: ["600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://fanza-sdk.example.com"),
  title: { default: "FANZA GUIDE LAB", template: "%s｜FANZA GUIDE LAB" },
  description: "出典と評価軸がわかる、成人向け作品の比較・発見ガイド。",
  applicationName: "FANZA GUIDE LAB",
  authors: [{ name: "FANZA GUIDE LAB 編集部" }],
  creator: "FANZA GUIDE LAB 編集部",
  publisher: "FANZA GUIDE LAB",
  category: "成人向け作品の比較・選び方",
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "ja_JP", siteName: "FANZA GUIDE LAB", title: "FANZA GUIDE LAB", description: "広告報酬だけで順位を決めない、成人向け作品の比較・発見ガイド。" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
