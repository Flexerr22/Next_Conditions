import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const manufactures = await prisma.manufacture.findMany();

    return NextResponse.json(manufactures);
}