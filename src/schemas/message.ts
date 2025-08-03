import { z } from "zod";

export const messageSchema = z.object({
  fullName: z.string().min(4, "O nome precisa ter pelo menos 4 caracteres"),
  email: z.email({ message: "E-mail inválido" }),
  message: z.string().min(6, "A mensagem deve ter pelo menos 6 caracteres"),
});

export type MessageFormData = z.infer<typeof messageSchema>;
