import "./assets/fonts.css";
import { ContextContainer } from "./components/context";
import { Route } from "wouter";
import { CodeConductScreen, HomeScreen } from "./screens";

function App() {
  return (
    <>
      <ContextContainer>
        <Route path="/">
          <HomeScreen />
        </Route>
        <Route path="/code-of-conduct">
          <CodeConductScreen />
        </Route>
      </ContextContainer>
    </>
  );
}

export default App;
