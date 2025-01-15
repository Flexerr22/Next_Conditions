import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    const query = req.nextUrl.searchParams.get('query') || '';

    const attributes = await prisma.attribute.findFirst({
        where: {
            id: Number(query),
        },
    });

    if (attributes) {
        return NextResponse.json(attributes);
    }

    else {
        return NextResponse.json({ message: "Not Found"}, {status: 404});
    }
}