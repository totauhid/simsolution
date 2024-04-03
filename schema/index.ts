import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "Firstname is required" }),
  lastName: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  role: z.string().min(1, { message: "Role number is required" }),
  projectDesign: z.string().min(1, { message: "Field is required" }),
  productDescription: z
    .string()
    .min(1, { message: "Field number is required" }),
  productBudget: z.string().min(1, { message: "Budget number is required" }),
});
