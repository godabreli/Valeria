import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Leistungen from "./components/Leistungen";
import Uebermich from "./components/Uebermich";
import Kontakt from "./components/Kontakt";
import { Navigation } from "./components/Navigation";

function App() {
  const [mobNavBarVisible, setMobNavBarVisible] = useState(false);
  return (
    <>
      <Navigation
        mobNavBarVisible={mobNavBarVisible}
        setMobNavBarVisible={setMobNavBarVisible}
      />
      {/* {mobNavBarVisible && (
        <MobileNavBar
          mobNavBarVisible={mobNavBarVisible}
          setMobNavBarVisible={setMobNavBarVisible}
        />
      )} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Leistungen" element={<Leistungen />} />
        <Route exact path="/Uebermich" element={<Uebermich />} />
        <Route exact path="/Kontakt" element={<Kontakt />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
