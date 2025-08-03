import Footer from "./components/Base/Footer";
import Header from "./components/Base/Header";
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

      <main className="items-center justify-center m-auto">
        <Home />
      </main>

      <Footer name="Vitor Valentim" description="Desenvolvedor Full Stack" />
    </>
  );
}

export default App;
