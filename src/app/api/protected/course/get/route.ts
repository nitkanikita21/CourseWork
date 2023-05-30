import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const courses = await prisma.course.findMany({
        include: { author: true }
    });

    return NextResponse.json({ courses });
}