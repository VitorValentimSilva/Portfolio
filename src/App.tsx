import Header from "./components/Header";

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
    </>
  );
}

export default App;
