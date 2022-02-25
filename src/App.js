import { useState } from "react";

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

  const [section, setSection] = useState('home');
  const menuClickHandler = (event) => {
    setSection(event);
  }

  let content;

  switch(section){
    case 'program':
      content = <Program />;
      break;
    case 'merch':
      content = <Merch />;
      break;
    case 'vysilac':
      content = <Vysilac />;
      break;
    case 'pozorumeni':
      content = <Pozorumeni />;
      break;
    case 'about':
      content = <Ofestivalu />;
      break;
    default:
      content = <Hranice onTicketsClick={ticketsFormOpenHandler} />;
  }

  return (
    <>
      <Header onMenuClick={menuClickHandler}/>
      {ticketsFormActive && <Tickets onClose={ticketsFormCloseHandler} />}
      {content}
    </>
  );
};

export default App;
