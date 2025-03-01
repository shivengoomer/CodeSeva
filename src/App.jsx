import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import DeepfakeDetector from "./components/Test";

const App = () => {
  console.log("✅ App component is rendering...");

  return (
    <>
      <Header />
      <div className="pt-[6rem] lg:pt-[8rem] xl:pt-[10rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<DeepfakeDetector />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
