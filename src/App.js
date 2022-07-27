import { Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import Header from "./components/Layout/Header";
import HraniceNew from "./components/Content/HraniceNew";
import Program from "./components/Content/Program/Program";
import Merch from "./components/Content/Merch/Merch";
import Vysilac from "./components/Content/Vysilac/Vysilac";
import Pozorumeni from "./components/Content/Pozorumeni/Pozorumeni";
import Ofestivalu from "./components/Content/Ofestivalu/Ofestivalu";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HraniceNew />} />
        <Route path="program" exact element={<Program />} />
        <Route path="merch" exact element={<Merch />} />
        <Route path="vysilac" exact element={<Vysilac />} />
        <Route path="pozorumeni" exact element={<Pozorumeni />} />
        <Route path="about" exact element={<Ofestivalu />} />
      </Routes>
      <CookieConsent location="bottom" buttonText="Souhlasím">
        Tento web používá cookies. Potvrďte, prosím, souhlas s jejich použitím,
        nebo stránku neprodleně opusťte.
      </CookieConsent>
    </>
  );
};

export default App;
