import { IoSchoolOutline } from "react-icons/io5";
import SubTitleField from "../SubTitleField";
import TitleField from "../TitleField";

export default function Contact() {
  return (
    <section id="Contato" className="pt-12 pb-14 max-w-[1450px] m-auto">
      <TitleField
        title="Vamos Conversar"
        description="Tem um projeto em mente ou quer discutir uma oportunidade? Adoraria conversar com você!"
      />

      <div>
        <div>
          <div>
            <SubTitleField
              icon={<IoSchoolOutline size={34} />}
              iconClassDark="text-PrimaryDarkTheme"
              iconClassLight="text-PrimaryLightTheme"
              title="Informações de Contato"
            />
          </div>

          <div>
            <SubTitleField
              icon={<IoSchoolOutline size={34} />}
              iconClassDark="text-PrimaryDarkTheme"
              iconClassLight="text-PrimaryLightTheme"
              title="Redes Sociais"
            />
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}
