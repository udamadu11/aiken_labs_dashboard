import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <div className="container">
      <Navbar sidebar={sidebar} openSidebar={openSidebar} />
      <h1>Dashborad</h1>
    </div>
  );
};

export default App;
