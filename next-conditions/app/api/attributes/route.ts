import { prisma } from "@/prisma/prisma-client"; 
import { NextRequest, NextResponse } from "next/server"; 
 
export async function GET(req: NextRequest) { 
     
    const attr =  await prisma.attribute.findMany(); 
 
    return NextResponse.json(attr); 
}