import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import SubTitleField from "../SubTitleField";
import TitleField from "../TitleField";
import ContactInformation from "../ContactInformation";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { PiPhoneLight } from "react-icons/pi";
import MessageForm from "../MessageForm";
import { useTheme } from "../../hooks/useTheme";
import { useEmailSender } from "../../hooks/useEmailSender";

export default function Contact() {
  const { theme } = useTheme();
  const sendEmail = useEmailSender();

  return (
    <section id="Contato" className="pt-12 pb-14 max-w-[1450px] m-auto">
      <TitleField
        title="Vamos Conversar"
        description="Tem um projeto em mente ou quer discutir uma oportunidade? Adoraria conversar com você!"
      />

      <div className="flex w-full items-center gap-20">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-6">
            <SubTitleField
              icon={<LuMessageCircle size={28} />}
              iconClassDark="text-PrimaryDarkTheme"
              iconClassLight="text-PrimaryLightTheme"
              title="Informações de Contato"
            />

            <div className="flex flex-col gap-5">
              <ContactInformation
                icon={<MdOutlineMail size={28} />}
                iconClassDark="text-PrimaryDarkTheme bg-PrimaryDarkTheme/40"
                iconClassLight="text-PrimaryLightTheme bg-PrimaryLightTheme/40"
                title="E-mail"
                description="vitorvalentin840@gmail.com"
              />

              <ContactInformation
                icon={<PiPhoneLight size={28} />}
                iconClassDark="text-SecondaryDarkTheme bg-SecondaryDarkTheme/40"
                iconClassLight="text-SecondaryLightTheme bg-SecondaryLightTheme/40"
                title="Telefone"
                description="+55 (18) 99699-1108"
              />

              <ContactInformation
                icon={<MdOutlineLocationOn size={28} />}
                iconClassDark="text-AccentDarkTheme bg-AccentDarkTheme/40"
                iconClassLight="text-AccentLightTheme bg-AccentLightTheme/40"
                title="Localização"
                description="Presidente Prudente, SP - Brasil"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SubTitleField title="Redes Sociais" />

            <div className="flex flex-col gap-5">
              <ContactInformation
                icon={<IoLogoGithub size={28} />}
                iconClassDark="text-PrimaryLightTheme bg-PrimaryLightTheme/40"
                iconClassLight="text-PrimaryDarkTheme bg-PrimaryDarkTheme/40"
                title="GitHub"
                description="@VitorValentimSilva"
              />

              <ContactInformation
                icon={<IoLogoLinkedin size={28} />}
                iconClassDark="text-SecondaryLightTheme bg-SecondaryLightTheme/40"
                iconClassLight="text-SecondaryDarkTheme bg-SecondaryDarkTheme/40"
                title="Linkedin"
                description="/in/vitor-valentim-desenvolvedor"
              />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 rounded-2xl p-6 w-full
          ${
            theme === "dark"
              ? "bg-BackgroundDarkTheme/80"
              : "bg-BackgroundLightTheme/80"
          }`}
        >
          <div>
            <h4
              className={`font-semibold text-3xl
              ${
                theme === "dark"
                  ? "text-BackgroundLightTheme"
                  : "text-BackgroundDarkTheme"
              }`}
            >
              Envie uma Mensagem
            </h4>
          </div>

          <MessageForm onSubmit={sendEmail} />
        </div>
      </div>
    </section>
  );
}
