import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, {id}: {id: string}) {
    const course = await prisma.course.findFirst({
        where: {
            id
        }
    })

    return NextResponse.json({
        course
    })

}