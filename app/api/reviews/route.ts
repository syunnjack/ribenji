import { getDb } from "../../../db";
import { reviews } from "../../../db/schema";

const axes = new Set(["ストーリー", "価格", "長さ", "雰囲気", "公式情報の分かりやすさ"]);
const ageBands = new Set(["20代", "30代", "40代", "50代以上", "回答しない"]);
const bestForOptions = new Set(["初めて選ぶ人", "ストーリー重視", "短時間で選びたい人", "価格重視", "新しい好みを探す人", "その他"]);
const blocked = [/https?:\/\//i, /@/, /\b(?:LINE|電話番号|住所)\b/i];

export async function POST(request: Request) {
  try {
    const input = await request.json() as Record<string, unknown>;
    const body = String(input.body ?? "").trim();
    const productId = String(input.productId ?? "general").slice(0, 80);
    const helpfulAxis = String(input.helpfulAxis ?? "");
    const rating = Number(input.rating);
    const ageBand = String(input.ageBand ?? "回答しない");
    const bestFor = String(input.bestFor ?? "その他");
    const containsSpoiler = input.containsSpoiler === "on" || input.containsSpoiler === true;
    const startedAt = Number(input.startedAt);
    if (input.website || !Number.isFinite(startedAt) || Date.now() - startedAt < 3000) return Response.json({ error: "投稿を受け付けられません。" }, { status: 400 });
    if (body.length < 20 || body.length > 400 || blocked.some(rule => rule.test(body))) return Response.json({ error: "本文を確認してください。URL・連絡先・個人情報は投稿できません。" }, { status: 400 });
    if (!axes.has(helpfulAxis) || !Number.isInteger(rating) || rating < 1 || rating > 5) return Response.json({ error: "評価項目を確認してください。" }, { status: 400 });
    if (!ageBands.has(ageBand) || !bestForOptions.has(bestFor)) return Response.json({ error: "年代・おすすめしたい人を確認してください。" }, { status: 400 });
    await getDb().insert(reviews).values({ productId, body, rating, helpfulAxis, ageBand, bestFor, containsSpoiler, status: "pending", policyVersion: "2026-07-28", createdAt: new Date() });
    return Response.json({ ok: true, status: "pending", message: "投稿を受け付けました。内容を確認してから掲載します。" }, { status: 202 });
  } catch {
    return Response.json({ error: "投稿を保存できませんでした。" }, { status: 503 });
  }
}
