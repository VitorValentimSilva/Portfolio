import { useCallback } from "react";
import { sendContactEmail, type EmailParams } from "../services/emailService";

export function useEmailSender() {
  return useCallback(async (data: EmailParams) => {
    try {
      await sendContactEmail(data);
      alert("Enviado com sucesso! 🎉");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar.");
    }
  }, []);
}
