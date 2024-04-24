import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "Firstname is required" }),
  lastName: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  projectDesign: z.string().min(1, { message: "Design is required" }),
  productDescription: z.string().min(1, { message: "Description is required" }),
  productBudget: z.string().min(1, { message: "Budget is required" }),
});

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string()
    .trim()
    .min(6, { message: "Password at list 6 char." })
    .max(30, { message: "Password at most 6 char." }),
});
