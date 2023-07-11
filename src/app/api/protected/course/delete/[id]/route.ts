import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {

    const result = await prisma.course.delete({
        where: {
            id: params.id
        }
    });


    return NextResponse.json({ status: "Ok", course: result });
}