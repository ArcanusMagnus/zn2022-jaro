import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Hranice from "./components/Content/Hranice";
import Program from "./components/Content/Program/Program";
import Merch from "./components/Content/Merch/Merch";
import Vysilac from "./components/Content/Vysilac/Vysilac";
import Pozorumeni from "./components/Content/Pozorumeni/Pozorumeni";
import Ofestivalu from "./components/Content/Ofestivalu/Ofestivalu";
import Tickets from "./components/Tickets/Tickets";

const App = () => {
  const [ticketsFormActive, setTicketsFormActive] = useState(false);

  const ticketsFormCloseHandler = () => {
    setTicketsFormActive(false);
  };

  const ticketsFormOpenHandler = () => {
    setTicketsFormActive(true);
  };

  return (
    <>
      <Header/>
      {ticketsFormActive && <Tickets onClose={ticketsFormCloseHandler} />}
      <Routes>
        <Route path="/" element={<Hranice onTicketsClick={ticketsFormOpenHandler} />}>
          <Route path="tickets"/>
        </Route>
        <Route path="program" element={<Program />} />
        <Route path="merch" element={<Merch />} />
        <Route path="vysilac" element={<Vysilac />} />
        <Route path="pozorumeni" element={<Pozorumeni />} />
        <Route path="about" element={<Ofestivalu />} />
      </Routes>
    </>
  );
};

export default App;
