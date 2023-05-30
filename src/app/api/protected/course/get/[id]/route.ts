import { prisma } from "@/auth/auth";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

type Props = {
    id: string
}

export async function GET(request: Request, { params }: {params: {id: string}}) {
    const course = await prisma.course.findUnique({
        where: { id: params.id }, include: { author: true }
    });
    return NextResponse.json(course);

}