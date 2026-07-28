import type { Metadata } from "next";

export const metadata: Metadata = { title: "編集・広告・投稿方針", description: "運営者、評価方法、広告との関係、投稿の確認、訂正対応を説明します。", alternates: { canonical: "/policies/editorial" } };

export default function EditorialPolicy() {
  return <><nav className="policyNav"><a href="/">トップ</a><a href="/guides/ranking-policy">ランキング方針</a><a href="/guides/privacy">プライバシー</a></nav><article className="policyShell"><p className="eyebrow">信頼と透明性</p><h1>編集・広告・投稿方針</h1><p>運営：FANZA GUIDE LAB編集部。成人向け作品を、情報の出どころと判断基準が分かる形で比較する非公式メディアです。</p><h2>誰が・どのように・なぜ作るか</h2><p>編集部が各公式サイトを確認し、利用者が納得して選べる比較基準を設けます。価格、配信状況、作品の特徴は公式情報で確認します。</p><h2>広告とランキング</h2><p>購入成立時に報酬を受け取る場合があります。ただし、広告報酬額はおすすめやランキングの順位に使いません。広告を含むリンクにはPR表示を付けます。</p><h2>投稿内容の確認</h2><p>投稿は内容を確認してから掲載します。個人情報、外部サイトへの誘導、誹謗中傷、権利侵害、迷惑投稿、具体的すぎる性的表現は掲載しません。公開後も通報・訂正・削除依頼に対応します。</p><h2>好み情報</h2><p>好みは本人が任意で選んだ内容だけを画面内で扱い、外部広告へ送りません。選んでいない属性を推測することもありません。</p><h2>訂正と更新</h2><p>重要な更新は日付と変更内容を記録します。誤り、権利侵害、削除依頼は運営窓口で確認し、必要に応じて訂正または非公開にします。</p><p>制定：2026年7月15日</p></article></>;
}
