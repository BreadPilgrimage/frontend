import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import MainPage from "./pages/MainPage";
import BreadPage from "./pages/BreadPage";
import SearchPage from "./pages/SearchPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/breadpage" element={<BreadPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
