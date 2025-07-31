import Footer from "./components/Footer";
import Header from "./components/Header";
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <Header
        name="Vitor Valentim"
        nameItems={[
          "Início",
          "Sobre",
          "Tecnologias",
          "Projetos",
          "Formação",
          "Contato",
        ]}
      />

      <Footer
        name="Vitor Valentim"
        description="Desenvolvedor Full Stack"
        socialLinks={[
          {
            icon: <IoLogoGithub className="w-6 h-6" />,
            href: "https://github.com/VitorValentimSilva",
            label: "GitHub",
          },
          {
            icon: <IoLogoLinkedin className="w-6 h-6" />,
            href: "https://linkedin.com/in/vitor-valentim-desenvolvedor",
            label: "LinkedIn",
          },
          {
            icon: <IoMailOutline className="w-6 h-6" />,
            href: "mailto:vitorvalentin840@gmail.com",
            label: "Email",
          },
        ]}
      />
    </>
  );
}

export default App;
