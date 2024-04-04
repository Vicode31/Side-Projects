import TypeWriter from "@/components/TypeWriter";
import Navbar from "@/components/navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 p-24">
      <Navbar />
      <p className="text-4xl font-thin">Bonjour & bienvenue !</p>
      <div className="flex gap-4 text-6xl">
        <p className="font-light">Nous sommes</p>
        <TypeWriter />
      </div>
      <div className="flex gap-4 text-xl">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedinIn />
      </div>
      <button className="rounded-full border-2 border-white py-4 px-6 hover:bg-white hover:text-black ease-in-out duration-700">
        Prendre contact
      </button>
    </main>
  );
}
