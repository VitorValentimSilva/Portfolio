import { IoSchoolOutline } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import SubTitleField from "../SubTitleField";
import TitleField from "../TitleField";
import { PiMedal } from "react-icons/pi";
import type { ReactElement } from "react";
import { FaRegCalendar } from "react-icons/fa";

interface InfoFormation {
  icon?: ReactElement;
  iconClassDark?: string;
  iconClassLight?: string;
  tittle: string;
  location: string;
  description: string;
  date: string;
}

interface FormationProps {
  information: InfoFormation[];
}

export default function Formation({ information }: FormationProps) {
  const { theme } = useTheme();

  return (
    <section
      id="Formação"
      className={`flex flex-col items-center gap-15 mt-12 pt-12 pb-14 shadow-xl
      ${
        theme === "dark"
          ? "bg-BackgroundDarkTheme/40 shadow-BackgroundLightTheme/25"
          : "bg-BackgroundLightTheme/40 shadow-BackgroundDarkTheme/25"
      }`}
    >
      <TitleField
        title="Formação"
        description="Educação sólida e aprendizado contínuo para manter-me sempre atualizado com as tecnologias mais recentes"
      />

      <div className="flex justify-between gap-15 w-full max-w-[1450px]">
        <div className="flex flex-col gap-6">
          <SubTitleField
            icon={<IoSchoolOutline size={34} />}
            iconClassDark="text-PrimaryDarkTheme"
            iconClassLight="text-PrimaryLightTheme"
            title="Educação Acadêmica"
          />

          <div className="flex flex-col gap-8">
            {information
              .filter((item) => Boolean(item.icon))
              .map((item, key) => (
                <div
                  key={key}
                  className={`flex gap-6 rounded-2xl w-[700px] p-5 transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "bg-BackgroundDarkTheme/70"
                      : "bg-BackgroundLightTheme/70"
                  }`}
                >
                  <div
                    className={`rounded-full p-2 shadow-xl m-auto
                    ${
                      theme === "dark"
                        ? item.iconClassDark
                        : item.iconClassLight
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className={`font-bold text-2xl text-justify
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme"
                          : "text-BackgroundDarkTheme"
                      }`}
                    >
                      {item.tittle}
                    </h3>
                    <p
                      className={`font-semibold text-lg
                      ${
                        theme === "dark"
                          ? "text-PrimaryDarkTheme"
                          : "text-PrimaryLightTheme"
                      }`}
                    >
                      {item.location}
                    </p>
                    <p
                      className={`text-base text-justify
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme/70"
                          : "text-BackgroundDarkTheme/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="w-[80px]">
                    <p
                      className={`text-sm
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme/70"
                          : "text-BackgroundDarkTheme/70"
                      }
                  `}
                    >
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <SubTitleField
            icon={<PiMedal size={32} />}
            iconClassDark="text-SecondaryDarkTheme"
            iconClassLight="text-SecondaryLightTheme"
            title="Certificações"
          />

          <div className="flex flex-col gap-5">
            {information
              .filter((item) => !item.icon)
              .map((item, key) => (
                <div
                  key={key}
                  className={`w-[650px] flex justify-between rounded-2xl p-5 transition-transform duration-300 hover:scale-105
                  ${
                    theme === "dark"
                      ? "bg-BackgroundDarkTheme/70"
                      : "bg-BackgroundLightTheme/70"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`font-bold text-xl text-justify
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme"
                          : "text-BackgroundDarkTheme"
                      }`}
                    >
                      {item.tittle}
                    </h3>
                    <p
                      className={`font-semibold text-base
                      ${
                        theme === "dark"
                          ? "text-PrimaryDarkTheme"
                          : "text-PrimaryLightTheme"
                      }`}
                    >
                      {item.location}
                    </p>
                    <p
                      className={`text-base text-justify
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme/70"
                          : "text-BackgroundDarkTheme/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <p
                      className={`text-sm font-semibold inline-flex items-center gap-2 rounded-2xl py-1 px-4
                      ${
                        theme === "dark"
                          ? "text-BackgroundLightTheme bg-SecondaryDarkTheme/60"
                          : "text-BackgroundDarkTheme bg-SecondaryLightTheme/60"
                      }
                  `}
                    >
                      <FaRegCalendar size={14} /> {item.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
