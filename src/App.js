import { useState } from "react";

//component
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Index from "./components/Chart/Index";

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
      <Index />
      <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;
