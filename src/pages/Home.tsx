import { IoCodeSlash } from "react-icons/io5";
import AboutMe from "../components/AboutMe";
import Initiation from "../components/Initiation";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { PiLightning } from "react-icons/pi";

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
            icon: <IoCodeSlash className="w-6 h-6" />,
            title: "Desenvolvimento Full Stack",
            description:
              "Experiência completa em frontend e backend, criando aplicações robustas e escaláveis.",
          },
          {
            icon: <PiLightning className="w-6 h-6" />,
            title: "Performance & Otimização",
            description:
              "Foco em criar aplicações rápidas e eficientes, otimizadas para a melhor experiência do usuário.",
          },
          {
            icon: <HiOutlineLightBulb className="w-6 h-6" />,
            title: "Soluções Inovadoras",
            description:
              "Sempre buscando maneiras criativas e eficientes de resolver desafios complexos.",
          },
        ]}
      />
    </>
  );
}
