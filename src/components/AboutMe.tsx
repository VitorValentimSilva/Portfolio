import type { ReactElement } from "react";
import { useTheme } from "../hooks/useTheme";

interface InfoItem {
  icon: ReactElement;
  title: string;
  description: string;
}

interface AboutMeProps {
  text: Array<string>;
  information: InfoItem[];
}

export default function AboutMe({ text, information }: AboutMeProps) {
  const { theme } = useTheme();

  return (
    <section id="#Sobre">
      <h2 className={` ${theme}`}>Sobre Mim</h2>

      <div>
        <div>
          {text.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>

        <div>
          {information.map((item, idx) => (
            <div key={idx}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
