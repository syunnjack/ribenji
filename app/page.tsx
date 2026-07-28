import type { Metadata } from "next";
import { SiteClient } from "./site-client";

export const metadata: Metadata = {
  title: "FANZA GUIDE LAB｜作品選びを、透明に。",
  description: "評価の基準、情報の出どころ、広告との関係を明示し、確認済みの利用者の声とともに納得できる作品選びを支援します。",
  alternates: { canonical: "/" },
};

const siteUrl = process.env.SITE_URL ?? "https://fanza-sdk.example.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "FANZA GUIDE LAB", url: siteUrl, inLanguage: "ja-JP", publisher: { "@id": `${siteUrl}/#organization` } },
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "FANZA GUIDE LAB 編集部", url: siteUrl, description: "広告報酬だけで順位を決めず、公式情報と確認済みの利用者の声を分けて示す非公式の比較メディア。", knowsAbout: ["成人向け作品の選び方", "作品比較", "広告表示", "口コミ確認", "プライバシー"] },
    { "@type": "WebPage", "@id": `${siteUrl}/#webpage`, url: siteUrl, name: "FANZA GUIDE LAB｜作品選びを、透明に。", description: "情報の出どころ、更新日、選ぶ基準、利用者の声を分けて示す成人向け作品ガイド。", inLanguage: "ja-JP", dateModified: "2026-07-28", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` }, speakable: { "@type": "SpeakableSpecification", cssSelector: [".lead", ".faq"] } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "トップ", item: siteUrl }] },
    { "@type": "FAQPage", "@id": `${siteUrl}/#faq`, mainEntity: [
      { "@type": "Question", name: "ランキングはどのように作成していますか？", acceptedAnswer: { "@type": "Answer", text: "公式サイトの情報、情報の新しさ、価格、掲載前に確認した利用者の声を分けて扱い、広告報酬だけで順位を決めません。" } },
      { "@type": "Question", name: "口コミはすべて掲載されますか？", acceptedAnswer: { "@type": "Answer", text: "いいえ。個人情報、誹謗中傷、権利侵害、スパム、具体的すぎる性的表現を含む投稿は公開しません。" } }
    ] }
  ]
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SiteClient /></>;
}
