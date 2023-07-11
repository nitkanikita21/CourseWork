import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const data = await prisma.comentar.findMany({
        where: {
            courseId: params.id
        }, 
        include: {
            author: true
        }
    });

    return NextResponse.json(data);
}