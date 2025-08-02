import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export const SOCIAL_LINKS = [
  {
    icon: <IoLogoGithub size={24} />,
    href: "https://github.com/VitorValentimSilva",
    label: "GitHub",
  },
  {
    icon: <IoLogoLinkedin size={24} />,
    href: "https://linkedin.com/in/vitor-valentim-desenvolvedor",
    label: "LinkedIn",
  },
  {
    icon: <IoMailOutline size={24} />,
    href: "mailto:vitorvalentin840@gmail.com",
    label: "Email",
  },
] as const;
export type SocialLink = (typeof SOCIAL_LINKS)[number];
