import { useState } from "react";

//component
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Index from "./components/Chart/Index";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <Index />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default App;
