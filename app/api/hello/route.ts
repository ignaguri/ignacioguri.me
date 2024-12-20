import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    i: "love you",
    wont: "you tell",
    me: "your name?",
  });
}
