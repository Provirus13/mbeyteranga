import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "mbeyteranga-api",
    status: "ok",
    timestamp: new Date().toISOString()
  });
}
