import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const data = await request.json();

    await prisma.comentar.create({
        data: {
            content: data.content,
            authorId: data.authorId,
            courseId: params.id
        }
    });

    return NextResponse.json({ status: "ok" });
}