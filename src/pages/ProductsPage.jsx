import { Link } from "react-router-dom";
import lightstickImg from "../assets/lightstick.jpg";
import lsKeyringImg from "../assets/ls-keyring.jpg";
import svtRhImg from "../assets/rh-2-cuts-photo-set.jpg";
import trCardImg from "../assets/trading-card-set.jpg";
import tumblrImg from "../assets/tumblr-totebag.jpg";
import rhMdImg from "../assets/md-svt.jpeg";

const produkList = [
  {
    nama: "SEVENTEEN Official Light Stick Ver.3",
    harga: "Rp 849.000",
    deskripsi:
      "Light up your world the SEVENTEEN way. This official light stick version 3 features an iridescent finish and the iconic diamond inside — perfect for concerts or simply showing your love. Syncs with the app for a full concert experience!",
    gambar: lightstickImg,
  },
  {
    nama: "SEVENTEEN Light Stick Keyring (Mini Ver.)",
    harga: "Rp 349.000",
    deskripsi:
      "Small in size, big on love! This adorable keyring version of SEVENTEEN's official light stick lets you carry a little piece of your fandom everywhere. Clip it to your bag, keys, or pouch for instant sparkle.",
    gambar: lsKeyringImg,
  },
  {
    nama: "SEVENTEEN Right Here 2-Cut Photo Set",
    harga: "Rp 330.000",
    deskripsi:
      "A collectors dream. This 2-cut photo set from the Right Here World Tour features all 13 members in timeless sepia-tone elegance. Frame them, collect them, love them — a perfect addition to any CARAT's wall or album.",
    gambar: svtRhImg,
  },
  {
    nama: "SEVENTEEN Trading Card Set (Right Here Ver.)",
    harga: "Rp 119.000",
    deskripsi:
      "Unbox joy with this trading card set featuring random member cards in stunning visuals from the Right Here tour series. Who will you pull? Every card feels like a message from your bias.",
    gambar: trCardImg,
  },
  {
    nama: "SEVENTEEN Jakarta Exclusive: Tumbler & Shopper Bag Set",
    harga: "Rp 499.000 & Rp 249.000",
    deskripsi: "Sip with style, SEVENTEEN style.",
    gambar: tumblrImg,
  },
  {
    nama: "SEVENTEEN Right Here Official Hand Fan",
    harga: "Rp 179.000",
    deskripsi: "Bring the breeze of your bias wherever you go. This official RIGHT HERE hand fan features all 13 SEVENTEEN members in soft, sepia-toned visuals — plus one exclusive group fan. Lightweight, durable, and perfect for concerts, display, or daily fangirl vibes. A must-have for every true CARAT.",
    gambar: rhMdImg,
  },
];

function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-[#FFF9F0] to-[#FDECEC] py-12 px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-700 mb-12 text-center">
        ✨ Our Collections ✨
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {produkList.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-2xl shadow-xl p-6 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border border-pink-200"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-pink-600 mb-1">
              {item.nama}
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-medium">
              {item.harga}
            </p>
            <p className="text-gray-600 text-sm">{item.deskripsi}</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
