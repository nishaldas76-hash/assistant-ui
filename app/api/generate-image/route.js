import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  if (!prompt) return NextResponse.json({ error: "No prompt" }, { status: 400 });

  try {
    const r = await fetch("https://api.banana.dev/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.BANANA_API_KEY
      },
      body: JSON.stringify({
        modelKey: process.env.BANANA_MODEL_KEY,
        input: { prompt }
      })
    });

    const data = await r.json();
    return NextResponse.json({ image: data.output[0] });
  } catch (err) {
    return NextResponse.json({ error: "Image generation failed", details: err.message }, { status: 500 });
  }
    }
