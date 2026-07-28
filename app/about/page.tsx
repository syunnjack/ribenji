import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトについて",
  description: "FANZA GUIDE LABの運営主体、目的、情報確認、広告、引用、訂正の方針。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const base = process.env.SITE_URL ?? "https://fanza-sdk.example.com";
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "FANZA GUIDE LABについて",
    url: `${base}/about`,
    dateModified: "2026-07-28",
    inLanguage: "ja-JP",
    mainEntity: { "@type": "Organization", name: "FANZA GUIDE LAB編集部", url: base },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><nav className="policyNav"><a href="/">トップ</a><a href="/policies/editorial">編集方針</a><a href="/guides/ranking-policy">ランキング方針</a></nav><article className="policyShell"><p className="eyebrow">このサイトについて</p><h1>作品選びに、透明なものさしを。</h1><p><strong>FANZA GUIDE LABは、成人向け作品の比較と発見を支援する非公式メディアです。</strong>運営はFANZA GUIDE LAB編集部です。</p><h2>目的</h2><p>刺激の強い画像や煽り文句だけに頼らず、価格、配信状況、公開日、作品の特徴、利用者の声を整理し、納得できる選択を支援します。</p><h2>情報の確認</h2><p>価格や配信状況などは各公式サイトを優先し、確認日を示します。編集部の評価、利用者の声、参考例の数値は、公式情報と分けて表示します。</p><h2>広告との関係</h2><p>リンク先で購入が成立すると報酬を受け取る場合があります。ただし、広告報酬額はランキングやおすすめ順位に使いません。</p><h2>引用するときの注意</h2><p>価格と配信状況は変わるため、引用時点でも公式サイトで再確認してください。参考例と表示された数値は、実績として扱わないでください。</p><h2>訂正</h2><p>誤りや権利上の問題が確認された場合は、内容を訂正または非公開にします。方針の最終更新日は2026年7月28日です。</p></article></>;
}
