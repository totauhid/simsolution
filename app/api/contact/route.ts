import prisma from "@/lib/db";
import { contactFormSchema } from "@/schema";
import { NextResponse } from "next/server";

interface ApiResponse {
  message?: string;
  contacts?: Array<ContactType>;
}

export async function POST(
  req: Request,
  res: Response
): Promise<NextResponse<ApiResponse>> {
  try {
    const data = await req.json();

    const validation = contactFormSchema.safeParse(data);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation errors!!!" },
        { status: 500 }
      );
    }

    await prisma.contact.create({
      data,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      {
        status: 200,
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

export async function GET(
  req: Request,
  res: Response
): Promise<NextResponse<ApiResponse>> {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ contacts }, { status: 200 });
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
