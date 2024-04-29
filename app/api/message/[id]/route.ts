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
    const { id } = params;

    const messages = await prisma.contact.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json({ messages }, { status: 204 });
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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = params;

    await prisma.contact.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Message deleted!",
      },
      {
        status: 204,
      }
    );
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
