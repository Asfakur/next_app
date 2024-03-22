import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Abdur" },
    { id: 2, name: "Rahim" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 }); // if invalid return 400
  return NextResponse.json({ id: 5, name: body.name }, { status: 201 }); // 201: object is created
}
