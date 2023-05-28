import { authOptions, prisma } from "@/auth/auth";
import { Course } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const schema = await request.json() as Course;
    const created = await prisma.course.create({
        data: {
            name: schema.name,
            content: schema.content,
            authorId: schema.authorId
        }
    })

    return NextResponse.json({ course: created })
}