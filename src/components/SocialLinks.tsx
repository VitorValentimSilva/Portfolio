import { useTheme } from "../hooks/useTheme";
import type { SocialLink } from "../utils/socialLinks";

interface SocialLinksProps {
  socialLinks: readonly SocialLink[];
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-8">
      {socialLinks.map((item, index) => (
        <button
          key={index}
          className={`rounded-full p-2.5 cursor-pointer transition-transform duration-300 hover:scale-105
          ${
            theme === "dark"
              ? "bg-BackgroundDarkTheme/60 text-BackgroundLightTheme hover:bg-PrimaryDarkTheme/70"
              : "bg-BackgroundLightTheme/60 text-BackgroundDarkTheme hover:bg-PrimaryLightTheme/60"
          }`}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        </button>
      ))}
    </div>
  );
}
