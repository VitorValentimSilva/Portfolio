import { IoCodeSlash, IoSchoolOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { PiBookOpenText, PiLightning } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { FiServer } from "react-icons/fi";
import { TfiMobile } from "react-icons/tfi";
import Formation from "../components/Section/Formation";
import Contact from "../components/Section/Contact";
import Initiation from "../components/Section/Initiation";
import AboutMe from "../components/Section/AboutMe";
import Technology from "../components/Section/Technology";
import Project from "../components/Section/Project";

export default function Home() {
  return (
    <>
      <Initiation
        name="Vitor Valentim"
        description="Desenvolvedor Full Stack com formação em Análise e Desenvolvimento de Sistemas que transforma requisitos complexos em aplicações robustas e intuitivas, com foco em qualidade e inovação."
        technology={["React", "React Native", "C#", "TypeScript"]}
      />

      <AboutMe
        text={[
          "Estou cursando Análise e Desenvolvimento de Sistemas na Unoeste e atuando como Estagiário de Desenvolvimento na Serradata, onde participo de todo o ciclo de vida de um sistema corporativo com ABP Framework (.NET Core) e Blazor Server.",
          "Ao longo da jornada, desenvolvi front-ends responsivos, APIs RESTful robustas e adoção de boas práticas como arquitetura em camadas, versionamento com Git e colaboração por code review. Acredito que tecnologia eficiente é resultado de um entendimento profundo das necessidades do projeto e da escolha criteriosa de arquiteturas e ferramentas certas.",
          "Além dos projetos que desenvolvi em React e React Native — fruto de estudos na faculdade, cursos complementares e aplicações práticas como landing pages e aplicativos — adquiri uma sólida experiência em front-end. No back-end, utilizei Node.js em diversos projetos, fortalecendo meu domínio em APIs, lógica de servidor e integrações. Essa combinação me permitiu construir soluções completas, com estética refinada, usabilidade e desempenho confiável.",
        ]}
        information={[
          {
            icon: <IoCodeSlash size={24} />,
            title: "Desenvolvimento Full Stack",
            description:
              "Conduzo projetos de ponta a ponta — desde interfaces em React ou Blazor até back-ends com .NET ou Node.js — garantindo soluções completas, manuteníveis e robustas.",
            iconClassDark:
              "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40 shadow-PrimaryDarkTheme/70",
            iconClassLight:
              "text-PrimaryLightTheme bg-PrimaryLightTheme/40 shadow-PrimaryLightTheme",
          },
          {
            icon: <PiLightning size={24} />,
            title: "Alta Performance & Otimização",
            description:
              "Entrego aplicações com carregamento rápido, consumo eficiente de recursos e experiência fluida, priorizando boas práticas de performance e UX.",
            iconClassDark:
              "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40 shadow-SecondaryDarkTheme/70",
            iconClassLight:
              "text-SecondaryLightTheme bg-SecondaryLightTheme/40 shadow-SecondaryLightTheme",
          },
          {
            icon: <HiOutlineLightBulb size={24} />,
            title: "Soluções Criativas & Inovadoras",
            description:
              "Transformo desafios complexos em soluções elegantes e eficientes, buscando sempre inovação e clareza técnica.",
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
            icon: <IoCodeSlash className="h-6 w-6 md:h-8 md:w-8" />,
            title: "Frontend",
            information: ["React", "TypeScript"],
            iconClassDark:
              "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40 shadow-PrimaryDarkTheme/50",
            iconClassLight:
              "text-PrimaryLightTheme bg-PrimaryLightTheme/40 shadow-PrimaryLightTheme/50",
          },
          {
            icon: <TfiMobile className="h-6 w-6 md:h-8 md:w-8" />,
            title: "Mobile",
            information: ["React Native (Apps)"],
            iconClassDark:
              "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40 shadow-SecondaryDarkTheme/50",
            iconClassLight:
              "text-SecondaryLightTheme bg-SecondaryLightTheme/40 shadow-SecondaryLightTheme/50",
          },
          {
            icon: <FiServer className="h-6 w-6 md:h-8 md:w-8" />,
            title: "Backend",
            information: ["Node.js (APIs)", "C#"],
            iconClassDark:
              "text-AccentDarkTheme bg-AccentDarkTheme/40 shadow-AccentDarkTheme/50",
            iconClassLight:
              "text-AccentLightTheme bg-AccentLightTheme/40 shadow-AccentLightTheme/50",
          },
          {
            icon: <GoDatabase className="h-6 w-6 md:h-8 md:w-8" />,
            title: "Database",
            information: ["MySQL (EF Core)"],
            iconClassDark:
              "text-AccentLightTheme bg-AccentLightTheme/40 shadow-AccentLightTheme/50",
            iconClassLight:
              "text-AccentDarkTheme bg-AccentDarkTheme/40 shadow-AccentDarkTheme/50",
          },
        ]}
      />

      <Project
        info={[
          {
            img: "/EcoBottle.png",
            title: "EcoBottle",
            description:
              "O EcoBottle é uma landing page de produto sustentável que posiciona uma garrafa 100% reciclável como uma inovação verde no mercado. Desenvolvido com foco em usabilidade, design moderno e performance, o objetivo é não apenas destacar a responsabilidade ambiental do produto, mas também converter visitantes em leads ou clientes..",
            technology: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
            linkGitHub: "https://github.com/VitorValentimSilva/EcoBottle",
            linkProject: "https://eco-bottle-seven.vercel.app",
          },
        ]}
      />

      <Formation
        information={[
          {
            icon: <IoSchoolOutline className="h-6 w-6 md:h-8 md:w-8" />,
            iconClassDark:
              "text-PrimaryDarkTheme bg-PrimaryDarkTheme/30 shadow-PrimaryDarkTheme/30",
            iconClassLight:
              "text-PrimaryLightTheme bg-PrimaryLightTheme/30 shadow-PrimaryLightTheme/30",
            tittle: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            location: "Unoeste",
            description:
              "Curso superior de nível tecnólogo focado em formar profissionais capacitados para projetar, implementar e manter sistemas de informação eficientes e confiáveis. Com ênfase prática, o currículo inclui: modelagem e gerenciamento de banco de dados (SQL); lógica de programação e orientação a objetos; arquitetura de software; integração de sistemas.",
            date: "2023 - 2025",
          },
          {
            icon: <PiBookOpenText className="h-6 w-6 md:h-8 md:w-8" />,
            iconClassDark:
              "text-AccentDarkTheme bg-AccentDarkTheme/30 shadow-AccentDarkTheme/30",
            iconClassLight:
              "text-AccentLightTheme bg-AccentLightTheme/30 shadow-AccentLightTheme/30",
            tittle: "Formação Front End T6 - ONE",
            location: "Alura",
            description:
              "Programa intensivo com foco em desenvolvimento front-end, abordando desde HTML, CSS e JavaScript até integração de UI interativa e boas práticas de acessibilidade e semântica na web. A formação oferece uma jornada estruturada para montar interfaces responsivas e dinâmicas, incorporando melhores práticas e fundamentos de usabilidade.",
            date: "2024 - 2024",
          },
          {
            tittle: "Desenvolvedor de Aplicações Web",
            location: "Unoeste",
            description:
              "Credencial: a14a36238041473141fb9e32369a86 70aa2db4a0e23a1621ab3fbb69eac55bbe",
            date: "2024",
          },
          {
            tittle: "Programador Front-End",
            location: "Unoeste",
            description:
              "Credencial: b2474435655982f2e522731b04868cbc faf0f11885f333488c839a8b066d64e6",
            date: "2024",
          },
          {
            tittle: "Programa Oracle Next Education F2 T6 Front-end",
            location: "Alura",
            description: "Credencial: e1747340-93d1-4a78-bd5b-481745ba7db5",
            date: "2024",
          },
          {
            tittle:
              "Formação Empreendedorismo, Agilidade e Protagonismo na Carreira T6 - ONE",
            location: "Alura",
            description: "Credencial: ff6920b3-d8fa-47c6-b00c-388065ba1eef",
            date: "2024",
          },
        ]}
      />

      <Contact />
    </>
  );
}
