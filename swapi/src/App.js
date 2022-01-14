import MovieFrame from "./Components/MovieFrame";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import ANewHope from "./Components/CharacterListComponents/ANewHope";
import EmpireStrike from "./Components/CharacterListComponents/EmpireStrike";
import ReturnJedi from "./Components/CharacterListComponents/ReturnJedi";
import PhantomMen from "./Components/CharacterListComponents/PhantomMen";
import AttackClone from "./Components/CharacterListComponents/AttackClone";
import RevengeSith from "./Components/CharacterListComponents/RevengeSith";
import TheForce from "./Components/CharacterListComponents/TheForce";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
            <Route index element={<MovieFrame />}/>
            <Route path="0" element={<ANewHope />}/>
            <Route path="1" element={<EmpireStrike />}/>
            <Route path="2" element={<ReturnJedi />}/>
            <Route path="3" element={<PhantomMen />}/>
            <Route path="4" element={<AttackClone />}/>
            <Route path="5" element={<RevengeSith />}/>
            <Route path="6" element={<TheForce />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
