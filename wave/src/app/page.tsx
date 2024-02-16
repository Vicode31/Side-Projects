import Image from "next/image";
import { WavyBackground } from "./components/ui/wavy-background";

export default function Home() {
  return (
    <main className="">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          The power of waves
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Elles en deviennent presque hypnotiques.
        </p>
      </WavyBackground>
    </main>
  );
}
