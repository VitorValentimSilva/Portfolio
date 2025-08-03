import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE!;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC!;

emailjs.init(PUBLIC_KEY);

export interface EmailParams {
  fullName: string;
  email: string;
  message: string;
}

export async function sendContactEmail({
  fullName,
  email,
  message,
}: EmailParams) {
  const templateParams = {
    name: fullName,
    fullName,
    email,
    message,
    title: "Contact Us",
    time: new Date().toLocaleString(),
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
