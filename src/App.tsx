import "./assets/fonts.css";
import { MainLayout } from "./components/layout";
import { About, Hero, Topics } from "./components";
import { ContextContainer } from "./components/context";

function App() {
  return (
    <>
      <ContextContainer>
        <MainLayout>
          <Hero />
          <About />
          <Topics />
        </MainLayout>
      </ContextContainer>
    </>
  );
}

export default App;
