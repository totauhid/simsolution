import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ApiResponse {
  message?: string;
  messages?: ContactType | null;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse>> {
  try {
    const messages = await prisma.contact.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
