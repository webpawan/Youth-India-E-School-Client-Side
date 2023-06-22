import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sticky__footer from "./components/Play with canva footer/Sticky__footer";
import Main__footer from "./components/main__footer/Main__footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Sticky__footer />
      <Main__footer />
    </>
  );
};

export default App;
