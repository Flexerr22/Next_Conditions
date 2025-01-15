import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    const query = req.nextUrl.searchParams.get('query') || '';

    const product = await prisma.product.findFirst({
        where: {
            id: Number(query),
        },
    });

    if (product) {
        return NextResponse.json(product);
    }

    else {
        return NextResponse.json({ message: "Not Found"}, {status: 404});
    }
}