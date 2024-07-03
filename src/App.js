import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import MainPage from "./pages/MainPage";
import BreadPage from "./pages/BreadPage";
import SearchPage from "./pages/SearchPage";
import ShopPage from "./pages/ShopPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";

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
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
