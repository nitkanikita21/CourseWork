import { prisma } from "@/auth/auth";
import { Course } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const schema = await request.json() as Course;
    const created = await prisma.course.create({
        data: {
            image: schema.image,
            name: schema.name,
            tags: schema.tags,
            content: schema.content,
            author: {
                connect: {
                    id: schema.authorId
                }
            }
        }
    });

    return NextResponse.json({ course: created });
}