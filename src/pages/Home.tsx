import { IoCodeSlash } from "react-icons/io5";
import AboutMe from "../components/AboutMe";
import Initiation from "../components/Initiation";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { PiLightning } from "react-icons/pi";
import Technology from "../components/Technology";
import { GoDatabase } from "react-icons/go";
import { FiServer } from "react-icons/fi";
import { TfiMobile } from "react-icons/tfi";

export default function Home() {
  return (
    <>
      <Initiation
        name="Vitor Valentim"
        description="Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais"
        technology={["React Developer", "Mobile Developer", "Full Stack"]}
      />

      <AboutMe
        text={[
          "Sou um desenvolvedor full stack apaixonado por tecnologia e inovação, com mais de 4 anos de experiência criando soluções digitais que transformam ideias em realidade. Especializo-me em desenvolvimento web moderno e mobile, sempre buscando as melhores práticas e tecnologias mais avançadas.",
          "Minha jornada começou com a curiosidade sobre como funcionam os aplicativos e sites que usamos diariamente. Desde então, tenho me dedicado a dominar tanto o frontend quanto o backend, criando experiências completas e impactantes para usuários e empresas.",
          "Acredito que a melhor tecnologia é aquela que resolve problemas reais de forma elegante e eficiente. Por isso, sempre busco entender profundamente as necessidades do projeto antes de escolher as ferramentas e arquiteturas mais adequadas.",
        ]}
        information={[
          {
            icon: <IoCodeSlash size={24} />,
            title: "Desenvolvimento Full Stack",
            description:
              "Experiência completa em frontend e backend, criando aplicações robustas e escaláveis.",
            iconClassDark:
              "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40 shadow-PrimaryDarkTheme/70",
            iconClassLight:
              "text-PrimaryLightTheme bg-PrimaryLightTheme/40 shadow-PrimaryLightTheme",
          },
          {
            icon: <PiLightning size={24} />,
            title: "Performance & Otimização",
            description:
              "Foco em criar aplicações rápidas e eficientes, otimizadas para a melhor experiência do usuário.",
            iconClassDark:
              "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40 shadow-SecondaryDarkTheme/70",
            iconClassLight:
              "text-SecondaryLightTheme bg-SecondaryLightTheme/40 shadow-SecondaryLightTheme",
          },
          {
            icon: <HiOutlineLightBulb size={24} />,
            title: "Soluções Inovadoras",
            description:
              "Sempre buscando maneiras criativas e eficientes de resolver desafios complexos.",
            iconClassDark:
              "text-AccentDarkTheme bg-AccentDarkTheme/40 shadow-AccentDarkTheme/70",
            iconClassLight:
              "text-AccentLightTheme bg-AccentLightTheme/40 shadow-AccentLightTheme",
          },
        ]}
      />

      <Technology
        infoTechnology={[
          {
            icon: <IoCodeSlash size={30} />,
            title: "Frontend",
            information: ["React", "TypeScript"],
            iconClassDark:
              "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40 shadow-PrimaryDarkTheme/50",
            iconClassLight:
              "text-PrimaryLightTheme bg-PrimaryLightTheme/40 shadow-PrimaryLightTheme/50",
          },
          {
            icon: <TfiMobile size={30} />,
            title: "Mobile",
            information: ["React Native"],
            iconClassDark:
              "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40 shadow-SecondaryDarkTheme/50",
            iconClassLight:
              "text-SecondaryLightTheme bg-SecondaryLightTheme/40 shadow-SecondaryLightTheme/50",
          },
          {
            icon: <FiServer size={30} />,
            title: "Backend",
            information: ["Node.js", "C#"],
            iconClassDark:
              "text-AccentDarkTheme bg-AccentDarkTheme/40 shadow-AccentDarkTheme/50",
            iconClassLight:
              "text-AccentLightTheme bg-AccentLightTheme/40 shadow-AccentLightTheme/50",
          },
          {
            icon: <GoDatabase size={30} />,
            title: "Database",
            information: ["MySQL"],
            iconClassDark:
              "text-AccentLightTheme bg-AccentLightTheme/40 shadow-AccentLightTheme/50",
            iconClassLight:
              "text-AccentDarkTheme bg-AccentDarkTheme/40 shadow-AccentDarkTheme/50",
          },
        ]}
      />
    </>
  );
}
