import { useTheme } from "../hooks/useTheme";
import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "../utils/socialLinks";
import { IoArrowDown } from "react-icons/io5";

interface InitiationProps {
  name: string;
  description: string;
  technology: Array<string>;
}

export default function Initiation({
  name,
  description,
  technology,
}: InitiationProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Início"
      className="flex flex-col items-center justify-center gap-8 h-[673px]"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-7xl text-center">
          Olá, eu sou <br /> {name}
        </h1>
        <p>{description}</p>
      </div>

      <div className="flex items-center justify-center gap-6">
        {technology.map((item, idx) => (
          <button
            key={idx}
            className={`cursor-pointer border rounded-full px-5 py-1 ${theme}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        <button className="cursor-pointer border rounded-lg px-5 py-1">
          Ver Projetos
          <IoArrowDown />
        </button>
        <button className="cursor-pointer border rounded-lg px-5 py-1">
          Entre em Contato
        </button>
      </div>

      <SocialLinks socialLinks={SOCIAL_LINKS} />

      <div>
        <IoArrowDown />
      </div>
    </section>
  );
}
