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
import * as motion from "motion/react-client";

export default function Contact() {
  const { theme } = useTheme();
  const sendEmail = useEmailSender();

  const contactInformationItems = [
    {
      icon: <MdOutlineMail size={28} />,
      iconClassDark: "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40",
      iconClassLight: "text-PrimaryLightTheme bg-PrimaryLightTheme/40",
      title: "E-mail",
      description: "vitorvalentin840@gmail.com",
      href: "mailto:vitorvalentin840@gmail.com",
    },
    {
      icon: <PiPhoneLight size={28} />,
      iconClassDark: "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40",
      iconClassLight: "text-SecondaryLightTheme bg-SecondaryLightTheme/40",
      title: "Telefone",
      description: "+55 (18) 99699-1108",
      href: "mailto:vitorvalentin840@gmail.com",
    },
    {
      icon: <MdOutlineLocationOn size={28} />,
      iconClassDark: "text-AccentDarkTheme bg-AccentDarkTheme/40",
      iconClassLight: "text-AccentLightTheme bg-AccentLightTheme/40",
      title: "Localização",
      description: "Presidente Prudente, SP - Brasil",
      href: "https://maps.app.goo.gl/95hPGuevWR7KbARk8",
    },
  ];

  const socialMediaItems = [
    {
      icon: <IoLogoGithub size={28} />,
      iconClassDark: "text-PrimaryLightTheme bg-PrimaryLightTheme/40",
      iconClassLight: "text-PrimaryDarkTheme bg-PrimaryDarkTheme/40",
      title: "GitHub",
      description: "@VitorValentimSilva",
      href: "https://github.com/VitorValentimSilva",
    },
    {
      icon: <IoLogoLinkedin size={28} />,
      iconClassDark: "text-SecondaryLightTheme bg-SecondaryLightTheme/40",
      iconClassLight: "text-SecondaryDarkTheme bg-SecondaryDarkTheme/40",
      title: "Linkedin",
      description: "/in/vitor-valentim-desenvolvedor",
      href: "https://linkedin.com/in/vitor-valentim-desenvolvedor",
    },
  ];

  return (
    <section
      id="Contato"
      className="pt-20 pb-14 px-4 md:px-0 max-w-[1450px] mx-auto"
    >
      <TitleField
        title="Vamos Conversar"
        description="Tem um projeto em mente ou quer discutir uma oportunidade? Adoraria conversar com você!"
      />

      <div className="flex flex-col md:flex-row items-start md:items-stretch gap-12 md:gap-20">
        {/* COLUNA ESQUERDA: contatos + redes */}
        <div className="flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <SubTitleField
              icon={<LuMessageCircle size={28} />}
              iconClassDark="text-PrimaryDarkTheme"
              iconClassLight="text-PrimaryLightTheme"
              title="Informações de Contato"
            />

            <div className="flex flex-col gap-5">
              {contactInformationItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <ContactInformation {...item} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SubTitleField title="Redes Sociais" />

            <div className="flex flex-col gap-5">
              {socialMediaItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <ContactInformation {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: formulário */}
        <div
          className={`flex-1 flex flex-col gap-4 rounded-2xl p-6 transition-transform duration-300 hover:scale-105
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme/80"
                : "bg-BackgroundLightTheme/80"
            }`}
        >
          <h4
            className={`font-semibold text-3xl ${
              theme === "dark"
                ? "text-BackgroundLightTheme"
                : "text-BackgroundDarkTheme"
            }`}
          >
            Envie uma Mensagem
          </h4>

          <MessageForm onSubmit={sendEmail} />
        </div>
      </div>
    </section>
  );
}
