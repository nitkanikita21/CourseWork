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
    
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });

    if (user == null) {
        return NextResponse.json({ error: "User not found" });
    }
    console.log(user);
    return NextResponse.json(user);
}