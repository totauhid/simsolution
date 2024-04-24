import prisma from "@/lib/db";
import { contactFormSchema } from "@/schema";
import { NextResponse } from "next/server";

interface ContactList {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  projectDesign: string;
  productDescription: string;
  productBudget: string;
}

interface ApiResponse {
  message?: string;
  contacts?: Array<ContactList>;
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
    const contacts = await prisma.contact.findMany();

    return NextResponse.json({ contacts });
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
