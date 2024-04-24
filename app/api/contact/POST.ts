import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { ApiResponse } from "./route";

export async function POST(
  req: Request,
  res: Response
): Promise<NextResponse<ApiResponse>> {
  try {
    const data = (await req.json()) as contactFormSchema;

    const {} = data;

    console.log(data);

    // const validation = contactFormSchema.safeParse(data);
    // if (!validation.success) {
    //   return NextResponse.json(
    //     { message: "Validation errors!!!" },
    //     { status: 500 }
    //   );
    // }
    await prisma.contact.create({
      data: {},
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
