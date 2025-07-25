import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-300 via-pink-200 to-transparent opacity-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-pink-500">
          carats shop ✦
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-pink-300 transition">HOME</Link>
          <Link to="/productspage" className="hover:text-pink-300 transition">PRODUCTS</Link>
          <Link to="/contactpage" className="hover:text-pink-300 transition">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
