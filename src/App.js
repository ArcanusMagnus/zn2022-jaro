import Header from "./components/Layout/Header";
import Hranice from "./components/Content/Hranice";
import Program from "./components/Content/Program/Program";
import Merch from "./components/Content/Merch/Merch";
import Vysilac from "./components/Content/Vysilac/Vysilac";
import Pozorumeni from "./components/Content/Pozorumeni/Pozorumeni";
import Ofestivalu from "./components/Content/Ofestivalu/Ofestivalu";

const App = () => {
  return (
    <>
      <Header>
        <Hranice />
      </Header>
      <Program />
      <Merch />
      <Vysilac />
      <Pozorumeni />
      <Ofestivalu />
    </>
  );
};

export default App;
