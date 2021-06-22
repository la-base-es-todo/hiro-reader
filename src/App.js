import MainText from "./components/MainText";
import NavBar from "./components/NavBar";
import Options from "./components/Options";
import Headroom from "react-headroom";

function App() {
  return (
    <div className="App">
      <Headroom>
        <NavBar />
      </Headroom>
      <MainText />
      <Options />
    </div>
  );
}

export default App;
