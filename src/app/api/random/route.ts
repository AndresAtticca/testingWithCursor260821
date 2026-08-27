import { NextResponse } from "next/server";
import { randomIntInclusive } from "@/lib/random-int";

export function GET() {
  return NextResponse.json({ number: randomIntInclusive(38, 127) });
}
