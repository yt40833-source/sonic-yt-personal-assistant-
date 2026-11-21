// Sonic YT starter backend. Requires Node.js 20+.
import express from "express";
import OpenAI from "openai";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const here = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(here, "public")));

const apiKey = process.env.OPENAI_API_KEY;
const client = apiKey ? new OpenAI({ apiKey }) : null;

app.post("/api/chat", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message) return res.status(400).json({ error: "বার্তা লিখে পাঠাও।" });
  if (!client) return res.status(503).json({ error: "AI server is not configured yet." });

  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: "তুমি Sonic YT Personal Assistant। ব্যবহারকারীকে বাংলায় সাহায্য করবে। Free Fire YouTube ভিডিওর পরিকল্পনা, Shorts স্ক্রিপ্ট, title, description, thumbnail ধারণা ও চ্যানেল কনটেন্ট আইডিয়ায় সহায়তা করবে। তুমি নিজে থেকে ভিডিও সম্পাদনা বা YouTube-এ আপলোড করেছ বলে দাবি করবে না।",
      input: message
    });
    res.json({ reply: response.output_text || "দুঃখিত, এবার উত্তর তৈরি হয়নি।" });
  } catch (error) {
    console.error("AI request failed:", error?.message || error);
    res.status(502).json({ error: "AI সেবায় সমস্যা হয়েছে। পরে আবার চেষ্টা করো।" });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`Sonic YT running on port ${port}`));
