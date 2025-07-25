// src/HomePage.jsx
function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/tugas.jpg')" }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-pink-200 to-transparent opacity-70" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 absolute top-0 left-0 right-0 z-10">
        <h1 className="text-white font-semibold text-xl">carats shop</h1>
        <ul className="flex gap-6 text-white font-medium">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">COLLECTION</a></li>
        </ul>
      </nav>

      {/* Konten Tengah */}
      <div className="flex flex-col items-start justify-center h-screen pl-10 z-10 relative">
        <h2 className="text-white text-4xl md:text-5xl font-bold max-w-xl mb-6">
          Crafted for those who feel music deeper
        </h2>
        <button className="bg-pink-300 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-400 transition">
          Buy
        </button>
      </div>
    </div>
  )
}

export default HomePage;
