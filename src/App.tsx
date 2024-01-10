import "./assets/fonts.css";
import { ContextContainer } from "./components/context";
import { Route } from "wouter";
import { HomeScreen } from "./screens";

function App() {
  return (
    <>
      <ContextContainer>
        <Route path="/">
          <HomeScreen />
        </Route>
      </ContextContainer>
    </>
  );
}

export default App;
