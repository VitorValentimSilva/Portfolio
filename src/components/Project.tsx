import { IoLogoGithub } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import TitleField from "./TitleField";
import { FiExternalLink } from "react-icons/fi";

interface InfoProject {
  img: string;
  title: string;
  description: string;
  technology: Array<string>;
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
      className="max-w-[1450px] m-auto my-18 flex flex-col items-center gap-18"
    >
      <TitleField
        title="Projetos"
        description="Uma seleção dos meus melhores projetos, demonstrando diferentes tecnologias e soluções criativas"
      />

      <div className="w-full">
        {info.map((item, key) => (
          <div key={key} className="flex items-center gap-18">
            <div>
              <img
                src={item.img}
                alt={`Projeto ${item.title}`}
                title={`Projeto ${item.title}`}
                className="rounded-4xl w-[720px] h-[320px]"
              />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-3xl font-bold
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme"
                      : "text-BackgroundDarkTheme"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-lg text-justify w-[700px]
                  ${
                    theme === "dark"
                      ? "text-BackgroundLightTheme/60"
                      : "text-BackgroundDarkTheme/60"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                {item.technology.map((itemTechnology, keyTechnology) => (
                  <button
                    key={keyTechnology}
                    className={`border rounded-full px-5 py-1 text-base font-semibold transition-transform duration-300 hover:scale-105
                    ${
                      theme === "dark"
                        ? "border-AccentDarkTheme/20 text-AccentDarkTheme/80 bg-PrimaryLightTheme/20 hover:bg-PrimaryDarkTheme/40"
                        : "border-AccentLightTheme/20 text-AccentLightTheme bg-PrimaryDarkTheme/50 hover:bg-PrimaryLightTheme/40"
                    }`}
                  >
                    {itemTechnology}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <button
                  className={`inline-flex items-center gap-4 cursor-pointer py-2 px-6 rounded-xl font-semibold
                              transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "bg-SecondaryDarkTheme text-BackgroundDarkTheme hover:bg-BackgroundDarkTheme hover:text-SecondaryDarkTheme"
                      : "bg-SecondaryLightTheme text-BackgroundLightTheme hover:bg-BackgroundLightTheme hover:text-SecondaryLightTheme"
                  }`}
                >
                  <FiExternalLink size={20} />
                  Ver Projeto
                </button>

                <button
                  className={`inline-flex items-center gap-4 cursor-pointer py-2 px-6 rounded-xl font-semibold
                              transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "bg-BackgroundDarkTheme/80 text-PrimaryDarkTheme hover:bg-PrimaryDarkTheme hover:text-BackgroundDarkTheme/80"
                      : "bg-BackgroundLightTheme/80 text-PrimaryLightTheme hover:bg-PrimaryLightTheme hover:text-BackgroundLightTheme/80"
                  }`}
                >
                  <IoLogoGithub size={21} /> Código
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
