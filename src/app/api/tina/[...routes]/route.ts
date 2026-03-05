import { NextRequest, NextResponse } from "next/server";

// This route is handled by the TinaCMS dev server in local mode.
// In production, replace this with the proper TinaNodeBackend handler.
export async function GET(req: NextRequest) {
    return NextResponse.json({ message: "Tina API route" });
}

export async function POST(req: NextRequest) {
    return NextResponse.json({ message: "Tina API route" });
}
