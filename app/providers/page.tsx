import type { Metadata } from "next";

export const metadata: Metadata = { title: "掲載サービス一覧", description: "作品を比較できる公式サービスと、情報確認の方針をご案内します。", alternates: { canonical: "/providers" } };

const services = ["FANZA", "DUGA", "MGS動画", "DTI CASH提携サイト", "FC2コンテンツマーケット", "Fantia", "DLsite", "Gyutto"];

export default function Page() {
  return <><nav className="policyNav"><a href="/">トップ</a><a href="/policies/editorial">編集方針</a></nav><article className="policyShell"><p className="eyebrow">掲載サービス</p><h1>比較できる公式サービス</h1><p>各サービスが認めた方法で確認できる情報だけを掲載し、作品ごとに情報の出どころを明示します。</p>{services.map(name => <section key={name}><h2>{name}</h2><p>価格、配信状況、公開日などを公式サイトで確認し、比較しやすい形でご案内します。</p></section>)}<h2>情報の確認方針</h2><p>利用条件を確認し、掲載が認められた情報だけを扱います。価格や配信状況は変わることがあるため、購入前に公式サイトで再確認してください。</p><h2>公平な比較</h2><p>同じ作品が複数のサービスにある場合も、価格、配信状況、確認日時を分けて表示します。広告報酬額はランキングに使いません。</p></article></>;
}
