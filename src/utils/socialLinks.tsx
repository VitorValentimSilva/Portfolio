import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export const SOCIAL_LINKS = [
  {
    icon: <IoLogoGithub className="w-6 h-6" />,
    href: "https://github.com/VitorValentimSilva",
    label: "GitHub",
  },
  {
    icon: <IoLogoLinkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/vitor-valentim-desenvolvedor",
    label: "LinkedIn",
  },
  {
    icon: <IoMailOutline className="w-6 h-6" />,
    href: "mailto:vitorvalentin840@gmail.com",
    label: "Email",
  },
] as const;
export type SocialLink = (typeof SOCIAL_LINKS)[number];
