import { useState } from "react";

//component
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Index from "./components/Chart/Index";
import RightSidebar from "./components/sidebar/RightSIdebar/RightSidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggle2 = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <Index />
      <RightSidebar isOpenSidebar={isOpenSidebar} toggle2={toggle2} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default App;
