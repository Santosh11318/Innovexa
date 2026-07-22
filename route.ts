import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the world's best AI Business Copilot for Innovexa — the most powerful entrepreneurship platform. 

Your expertise covers:
- Startup building (business plans, pitch decks, financial models)
- Fundraising strategy (Seed, Series A, B, C)
- Go-to-market strategies
- Market research and competitor analysis
- Co-founder matching advice
- Team building and hiring
- Product roadmap planning
- Legal and compliance basics for startups
- Growth hacking and marketing
- SWOT, PESTLE, Business Model Canvas, Lean Canvas
- Indian startup ecosystem (DPIIT, SEBI, startup India, funding landscape)

Guidelines:
- Be concise but comprehensive
- Use markdown formatting (headers, bullets, bold) for clarity
- Give actionable, specific advice
- When relevant, mention Indian-specific resources (startup India, DPIIT registration, etc.)
- Always encourage and motivate founders
- Be specific with numbers when possible
- Keep responses focused and practical`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages required" }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-20), // last 20 messages for context
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || "I couldn't generate a response.";

    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("AI chat error:", error);
    return NextResponse.json(
      { error: "Failed to process AI request" },
      { status: 500 }
    );
  }
}
