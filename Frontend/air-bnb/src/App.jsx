import Head from "./Components/Header/Head";
import HomeScreen from "./Components/Main/HomeScreen";
import HouseDetails from "./Components/Main/HouseDetails ";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex-col">
        <Head />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/item/:id" element={<HouseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}