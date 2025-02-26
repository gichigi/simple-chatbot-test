import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

// Create OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

// Export specific HTTP methods
export const runtime = 'edge'; // Add edge runtime

// POST handler for chat completions
export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    // Get messages from request body
    const { messages } = await req.json();

    if (!messages) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Create chat completion
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      stream: true,
      messages,
    });

    // Convert response to stream
    const stream = OpenAIStream(response);

    // Return streaming response
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error in chat completion:', error);
    return NextResponse.json(
      { error: "An error occurred during your request." },
      { status: 500 }
    );
  }
} 