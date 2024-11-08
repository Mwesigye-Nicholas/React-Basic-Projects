import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorite";
import Details from "./pages/details/Details";


function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
