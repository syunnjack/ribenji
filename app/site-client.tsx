"use client";

import { useState } from "react";
import { ProductExplorer } from "./product-explorer";
import { UgcForm } from "./ugc-form";

const picks = [
  { rank: "01", title: "物語を重視して選ぶ", copy: "あらすじ、シリーズ情報、確認済みの感想を判断材料にします。", score: "編集部評価 4.7", tag: "初めての方へ" },
  { rank: "02", title: "短時間で選ぶ", copy: "公開日、価格帯、収録時間を同じ条件で比べます。", score: "24時間以内に確認", tag: "比べやすい" },
  { rank: "03", title: "新しい好みを発見", copy: "選んだ条件と、掲載前に確認された感想から候補を探します。", score: "参考の声 128件", tag: "新しい発見" },
];

function GuideCards() {
  return <section className="section"><div className="sectionHead"><p className="eyebrow">選び方ガイド</p><h2>根拠から選ぶ</h2><p>結論、比べる基準、向いている人を分かりやすく整理しています。</p></div><div className="cards"><article className="card"><b>はじめに</b><h3>初めての選び方</h3><p>目的、時間、価格、雰囲気の順に確認します。</p><footer><a href="/guides/hajimete">読む →</a></footer></article><article className="card"><b>信頼性</b><h3>ランキングの方針</h3><p>選ばれた理由と、広告報酬を順位に使わない考え方。</p><footer><a href="/guides/ranking-policy">読む →</a></footer></article><article className="card"><b>好み</b><h3>好み別カテゴリ</h3><p><a href="/categories/story">ストーリー</a>・<a href="/categories/costume">コスチューム</a>・<a href="/categories/romantic">ロマンチック</a>・<a href="/categories/long-form">長編</a></p><footer><a href="/guides/privacy">プライバシー方針 →</a></footer></article></div></section>;
}

function TasteMatch() {
  const options = ["物語性重視", "ロマンチック", "コスチューム", "年上", "同年代", "主導されたい", "主導したい", "ソフト表現", "非日常", "長編"];
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (taste: string) => setSelected(current => current.includes(taste) ? current.filter(item => item !== taste) : [...current, taste]);
  return <section className="taste section" aria-labelledby="taste-title"><div className="sectionHead"><p className="eyebrow">好みから探す</p><h2 id="taste-title">フェチ・好みから、<br />自分だけの棚へ。</h2><p>選んだ内容はこの画面内だけで使い、外部には送りません。</p></div><div className="tastePanel"><div><h3>気になる好みを選択</h3><p>複数選べます。選んでいない好みを勝手に推測しません。</p><div className="tasteTags">{options.map(taste => <button type="button" key={taste} aria-pressed={selected.includes(taste)} onClick={() => toggle(taste)}>{taste}</button>)}</div><button className="clearTaste" type="button" onClick={() => setSelected([])}>選択をすべて消去</button></div><aside><span>あなたの好み</span>{selected.length ? <><strong>{selected.length}個を選択中</strong><p>{selected.join(" ・ ")}</p><a href="#recommend-title">選ばれた理由つきの候補を見る →</a></> : <><strong>まだ選択されていません</strong><p>好みを選ぶと、人気順では見つけにくい候補を優先します。</p></>}</aside></div><p className="privacyNote">選んだ内容は保存せず、いつでもまとめて消去できます。</p></section>;
}

export function SiteClient() {
  const [adult, setAdult] = useState(false);
  const [sent, setSent] = useState(false);
  return <main>
    {!adult && <div className="gateOverlay" role="dialog" aria-modal="true" aria-labelledby="age-title"><div className="gateCard"><p className="eyebrow">年齢確認</p><h1 id="age-title">ここから先は<br />成人向け情報を含みます。</h1><p>18歳未満の方は利用できません。年齢確認前には刺激の強い画像を表示しません。</p><button onClick={() => setAdult(true)}>18歳以上です</button><a href="https://www.dmm.com/">退出する</a><a href="/policies/editorial">編集・安全方針を確認</a></div></div>}
    <TasteMatch />
    <ProductExplorer />
    <GuideCards />
    <UgcForm />
    <div className="notice">PR・広告を含みます　｜　最終更新 2026.07.28　｜　掲載情報は各公式サイトで確認しています</div>
    <header><a className="logo" href="#top">FANZA <i>GUIDE LAB</i></a><nav><a href="#find">見つける</a><a href="#method">選び方の基準</a><a href="#voices">みんなの声</a><a href="#products">作品を探す</a></nav></header>
    <section className="hero" id="top"><div><p className="eyebrow">納得できる作品選び</p><h1>作品選びを、<br /><em>透明</em>に。</h1><p className="lead">広告だから推す、を終わらせる。情報の出どころ・更新日・選ぶ基準・利用者の声を分けて示す、比較と発見のガイドです。</p><div className="actions"><a className="primary" href="#find">自分に合う探し方を見る</a><a href="#method">選び方の基準を見る →</a></div></div><aside><span>私たちの約束</span><strong>報酬額だけで<br />順位を決めません。</strong><p>公式情報と利用者の感想を分け、広告リンクには明確な表示を付けます。</p></aside></section>
    <section className="section" id="find"><div className="sectionHead"><p className="eyebrow">今日の選び方</p><h2>まず、選ぶ基準をつくる。</h2><p>作品名を並べる前に、何を重視するかを決めます。</p></div><div className="cards">{picks.map(p => <article className="card" key={p.rank}><span className="rank">{p.rank}</span><b>{p.tag}</b><h3>{p.title}</h3><p>{p.copy}</p><footer>{p.score}<a href="#products" aria-label={`${p.title}で探す`}>→</a></footer></article>)}</div><p className="affiliate">リンク先で購入が成立した場合、当サイトが報酬を受け取ることがあります。価格・配信状況は必ず公式サイトでご確認ください。</p></section>
    <section className="recommend section" aria-labelledby="recommend-title"><div className="sectionHead"><p className="eyebrow">選ばれた理由がわかる</p><h2 id="recommend-title">これを見た人の、<br />次の選択。</h2><p>閲覧数だけでなく「なぜ合うか」まで表示します。</p></div><div className="recommendGrid"><article className="seed"><span>いま見ている条件</span><h3>物語性 × 60分以上 × 高評価</h3><p>刺激の強い画像を使わず、作品の特徴と匿名の集計結果だけで比べます。</p><div className="chips"><b>物語性</b><b>長編</b><b>新着除外</b></div></article><div className="nextPicks"><article><span>一致度 92%</span><h3>同じ物語性で選ばれた作品</h3><p><strong>選ばれた理由：</strong>閲覧者の68%が「ストーリー」を役立つ基準に選びました。</p><a href="#products" rel="sponsored nofollow">公式情報を確認して見る →</a></article><article><span>意外性 74%</span><h3>好みを少し広げる関連作品</h3><p><strong>選ばれた理由：</strong>長編を見た人が次に選んだ別カテゴリ。人気順だけでは出ない候補です。</p><a href="#products" rel="sponsored nofollow">比較条件を確認する →</a></article></div></div><div className="trustRow"><span>個人を特定しない集計</span><span>広告報酬を順位から除外</span><span>選ばれた理由を表示</span><span>「興味なし」で調整可能</span></div></section>
    <section className="method" id="method"><div><p className="eyebrow">選び方の基準</p><h2>比べた理由が、<br />きちんと見える。</h2></div><ol><li><span>01</span><strong>公式情報を優先</strong><p>確認した日時と公式ページを示し、推測と事実を分けます。</p></li><li><span>02</span><strong>同じ基準で比較</strong><p>価格、発売日、情報の詳しさ、利用者の感想を同じ基準で比べます。</p></li><li><span>03</span><strong>更新日を明記</strong><p>重要な変更は記事内に記録し、古い情報を放置しません。</p></li></ol></section>
    <section className="voices section" id="voices"><div className="sectionHead"><p className="eyebrow">利用者の声</p><h2>みんなの「選びやすかった」</h2><p>満足度だけでなく、どんな人の判断に役立ったかを集めます。</p></div><div className="quotes"><blockquote>「評価の理由が短く整理されていて、公式ページで確認してから決められた。」<cite>30代・ストーリー重視　／　掲載前に確認済み</cite></blockquote><blockquote>「画像を表示しなくても比較できるので、落ち着いて探せた。」<cite>40代・プライバシー重視　／　掲載前に確認済み</cite></blockquote></div>{sent ? <div className="thanks">投稿ありがとうございます。内容を確認後、個人を特定できない形で掲載します。</div> : <form onSubmit={e => { e.preventDefault(); setSent(true); }}><label>どんな点が選択に役立ちましたか？<textarea required minLength={20} maxLength={400} placeholder="具体的な判断材料を20〜400文字で（個人情報・作品の詳細描写は入力しないでください）" /></label><div><label>満足度<select defaultValue=""><option value="" disabled>選択</option><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label><button type="submit">投稿内容を確認する</button></div><small>投稿はすぐには公開されません。誹謗中傷、個人情報、権利侵害、迷惑投稿、具体的すぎる性的表現は掲載しません。</small></form>}</section>
    <section className="faq section"><h2>よくある質問</h2><details><summary>ランキングはどのように作成していますか？</summary><p>公式サイトの情報、情報の新しさ、価格、掲載前に確認した利用者の声を分けて扱い、広告報酬だけで順位を決めません。</p></details><details><summary>口コミはすべて掲載されますか？</summary><p>いいえ。掲載基準を満たし、内容を確認できたものだけを掲載します。</p></details></section>
    <footer className="siteFooter"><div className="logo">FANZA <i>GUIDE LAB</i></div><p>作品選びに、透明なものさしを。</p><nav><a href="#method">選び方の基準</a><a href="#voices">投稿について</a><a href="#products">作品を探す</a></nav><small>© 2026 FANZA GUIDE LAB. FANZAおよびDMMは各権利者の商標です。本サイトは非公式の比較メディアです。</small></footer>
  </main>;
}
