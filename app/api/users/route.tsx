import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest) {

  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 }); // if invalid return 400
  return NextResponse.json({ id: 5, name: body.name }, { status: 201 }); // 201: object is created
}
