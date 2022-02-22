import Header from "./components/Layout/Header";
import Hranice from "./components/Content/Hranice";
import Program from "./components/Content/Program/Program";
import Merch from "./components/Content/Merch/Merch";

const App = () => {
  return (
    <>
      <Header>
        <Hranice />
      </Header>
      <Program />
      <Merch />
    </>
  );
};

export default App;
