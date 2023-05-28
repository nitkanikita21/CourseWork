import { authOptions, prisma } from "@/auth/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type Props = {
    id: string
}

export async function GET(request: Request, {id}: Props) {
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })

    if(user == null){
        return NextResponse.json({error: "User not found"})
    }

    return NextResponse.json({isAdmin: user.admin})
}