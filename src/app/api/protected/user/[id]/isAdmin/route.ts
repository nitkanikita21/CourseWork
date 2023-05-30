import { authOptions, prisma } from "@/auth/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {
        params
    }: {
        params: { id: string }
    }
) {
    console.log(`is admin; user id: ${params.id}`);
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });

    if (user == null) {
        return NextResponse.json({ error: "User not found" });
    }

    return NextResponse.json({ isAdmin: user.admin });
}