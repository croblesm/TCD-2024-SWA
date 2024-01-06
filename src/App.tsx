import "./assets/fonts.css";
import { MainLayout } from "./components/layout";
import { Hero } from "./components";
import { ContextContainer } from "./components/context";

function App() {
  return (
    <>
      <ContextContainer>
        <MainLayout>
          <Hero />
        </MainLayout>
      </ContextContainer>
    </>
  );
}

export default App;
