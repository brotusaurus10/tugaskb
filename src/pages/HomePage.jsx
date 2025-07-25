import React from "react";
import beachImage from "../assets/seventeen-beach.jpg";

function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Gambar */}
      <img
        src={beachImage}
        alt="SEVENTEEN at beach"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />


      {/* Konten Tengah */}
      <div className="flex flex-col items-start justify-center h-screen pl-10 z-10 relative">
        <h2 className="text-white text-4xl md:text-5xl font-bold max-w-xl mb-6">
          Crafted for those who feel music deeper ⋆˚✿˖°
        </h2>
      </div>
    </div>
  )
}

export default HomePage;