import Head from "./Components/Header/Head";
import AllListing from "./Components/Main/AllListing";
import HouseDetails from "./Components/Main/HouseDetails ";
import HomeScreen from "./Components/Header/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHouse from "./Components/Header/AddHouse";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Head />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/all-listings" element={<AllListing />} />
            <Route path="/item/:id" element={<HouseDetails />} />
            <Route path="/add-properties" element={<AddHouse />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
