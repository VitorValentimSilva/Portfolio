import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import TitleField from "../TitleField";

interface InfoProject {
  img: string;
  title: string;
  description: string;
  technology: string[];
  linkProject: string;
  linkGitHub: string;
}

interface ProjectProps {
  info: InfoProject[];
}

export default function Project({ info }: ProjectProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Projetos"
      className="max-w-[1450px] m-auto my-20 flex flex-col items-center gap-18 px-4 md:px-6"
    >
      <TitleField
        title="Projetos"
        description="Uma seleção dos meus melhores projetos, demonstrando diferentes tecnologias e soluções criativas"
      />

      <div className="w-full flex flex-col gap-16">
        {info.map((item, key) => (
          <div
            key={key}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-18"
          >
            <div className="w-full md:w-1/2">
              <a
                href={item.linkProject}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt={`Projeto ${item.title}`}
                  title={`Projeto ${item.title}`}
                  className="rounded-4xl w-full h-auto object-cover"
                />
              </a>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-2xl md:text-3xl font-bold 
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme"
                      : "text-BackgroundDarkTheme"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-base md:text-lg text-justify w-full 
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme/60"
                      : "text-BackgroundDarkTheme/60"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {item.technology.map((tech, idx) => (
                  <button
                    key={idx}
                    className={`border rounded-full px-4 py-1 text-sm md:text-base font-semibold transition-transform duration-300 hover:scale-105 
                    ${
                      theme === "dark"
                        ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                        : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={item.linkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 py-2 px-6 rounded-xl font-semibold transition-transform duration-300 hover:scale-105 
                  ${
                    theme === "dark"
                      ? "bg-SecondaryDarkTheme text-BackgroundDarkTheme hover:bg-BackgroundDarkTheme hover:text-SecondaryDarkTheme"
                      : "bg-SecondaryLightTheme text-BackgroundLightTheme hover:bg-BackgroundLightTheme hover:text-SecondaryLightTheme"
                  }`}
                >
                  <FiExternalLink size={20} />
                  Ver Projeto
                </a>

                <a
                  href={item.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 py-2 px-6 rounded-xl font-semibold transition-transform duration-300 hover:scale-105 
                  ${
                    theme === "dark"
                      ? "bg-BackgroundDarkTheme/80 text-PrimaryDarkTheme hover:bg-PrimaryDarkTheme hover:text-BackgroundDarkTheme/80"
                      : "bg-BackgroundLightTheme/80 text-PrimaryLightTheme hover:bg-BackgroundLightTheme hover:text-BackgroundLightTheme/80"
                  }`}
                >
                  <IoLogoGithub size={21} />
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
