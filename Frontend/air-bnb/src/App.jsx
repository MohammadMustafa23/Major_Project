import Head from "./Components/Header/Head";
import HomeScreen from "./Components/Main/HomeScreen";
import HouseDetails from "./Components/Main/HouseDetails ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHouse from './Components/Header/AddHouse'

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex-col">
        <Head />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/item/:id" element={<HouseDetails />} />
          <Route path="/add-properties" element={<AddHouse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}