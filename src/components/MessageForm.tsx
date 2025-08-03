import { useForm } from "react-hook-form";
import { messageSchema, type MessageFormData } from "../schemas/message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "../hooks/useTheme";

interface MessageFormProps {
  onSubmit: (data: MessageFormData) => void;
}

export default function MessageForm({ onSubmit }: MessageFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const { theme } = useTheme();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          className={`block font-medium 
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
          htmlFor="idFullName"
        >
          Nome Completo
        </label>
        <input
          {...register("fullName")}
          className={`mt-1 block w-full rounded-xl border px-3 py-2 
            ${
              theme === "dark"
                ? "border-BackgroundLightTheme text-BackgroundLightTheme"
                : "border-BackgroundDarkTheme"
            }`}
          placeholder="Seu nome completo"
          id="idFullName"
          name="fullName"
        />
        {errors.fullName && (
          <p className="text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label
          className={`block font-medium 
            ${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
          htmlFor="idEmail"
        >
          E-mail
        </label>
        <input
          {...register("email")}
          type="email"
          className={`mt-1 block w-full rounded-xl border px-3 py-2 
          ${
            theme === "dark"
              ? "border-BackgroundLightTheme text-BackgroundLightTheme"
              : "border-BackgroundDarkTheme"
          }`}
          placeholder="seuEmail@exemplo.com"
          id="idEmail"
          name="email"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          className={`block font-medium 
          ${
            theme === "dark"
              ? "text-BackgroundLightTheme"
              : "text-BackgroundDarkTheme"
          }`}
          htmlFor="idMessage"
        >
          Mensagem
        </label>
        <textarea
          {...register("message")}
          rows={5}
          id="idMessage"
          className={`mt-1 block w-full rounded-xl border px-3 py-2 
          ${
            theme === "dark"
              ? "border-BackgroundLightTheme text-BackgroundLightTheme"
              : "border-BackgroundDarkTheme"
          }`}
          placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full mt-2 rounded-xl py-2 disabled:opacity-50 font-semibold
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme bg-SecondaryDarkTheme hover:bg-SecondaryDarkTheme/70"
            : "text-BackgroundDarkTheme bg-SecondaryLightTheme hover:bg-SecondaryLightTheme/70"
        }`}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
