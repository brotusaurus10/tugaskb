import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>
      </>
  );
}

export default App;