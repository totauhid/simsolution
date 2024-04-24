import prisma from "@/lib/db";
import { contactFormSchema } from "@/schema";
import { NextResponse } from "next/server";

interface ApiResponse {
  message: string;
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

    const news = await prisma.contact.create({
      data,
    });

    return NextResponse.json({
      message: data,
    });
  } catch (error) {
    return NextResponse.json({
      message: "okey",
    });
  }
}
