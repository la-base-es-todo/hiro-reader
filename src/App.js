import MainText from "./components/MainText";
import NavBar from "./components/NavBar";
import Options from "./components/Options";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import getPageHistory from "./api";

function App() {
  const [pageToRender, setPageToRender] = useState({ page: "home" });
  const [pageObj, setPageObj] = useState({});

  useEffect(() => {
    const _pageObj = getPageHistory(pageToRender)[0];
    console.log("page:", _pageObj);
    setPageObj(_pageObj);
  }, [pageToRender]);

  return (
    <div className="App">
      <Headroom>
        <NavBar />
      </Headroom>
      <MainText pageObj={pageObj} />
      <Options pageObj={pageObj} setPageToRender={setPageToRender} />
    </div>
  );
}

export default App;
