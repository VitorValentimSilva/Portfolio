import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

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

      <main className="max-w-[1450px] items-center justify-center m-auto">
        <Home />
      </main>

      <Footer name="Vitor Valentim" description="Desenvolvedor Full Stack" />
    </>
  );
}

export default App;
