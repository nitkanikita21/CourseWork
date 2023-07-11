import { prisma } from "@/auth/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string, comId: string } }) {
    await prisma.comentar.delete({
        where: {
            id: params.comId
        }
    });

    return NextResponse.json({status: "ok"});
}