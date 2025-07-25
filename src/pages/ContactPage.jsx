import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cfe6fc] via-white to-[#ffd6e6] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-[#333] mb-4">Confused? Just reach out!</h1>
      <p className="text-center text-lg text-gray-700 max-w-md mb-8">
        Got questions or ready to make a purchase? Reach out to us or proceed
        to checkout to grab your Carats Collection now!
      </p>

      <a
        href="mailto:sairafr95@gmail.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
      >
        Message Us
      </a>
    </div>
  );
}

export default ContactPage;
