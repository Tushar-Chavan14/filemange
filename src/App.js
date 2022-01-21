import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Media from "./components/pages/media";
import Recents from "./components/pages/recents";
import Ui from "./components/ui/Ui";
import { UiContext } from "./components/ui/uicontext";
import { useState } from "react";
import Documents from "./components/pages/documents";

function App() {
  const [nvOpn, setnvOpn] = useState(false);
  const [sOurce, setsOurce] = useState([]);
  const [prevState, setprevState] = useState(false);

  return (
    <div>
      <UiContext.Provider
        value={{ nvOpn, setnvOpn, sOurce, setsOurce, prevState, setprevState }}
      >
        <Ui />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/documents" element={<Documents />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/recents" element={<Recents />} />
        </Routes>
      </UiContext.Provider>
    </div>
  );
}

export default App;
