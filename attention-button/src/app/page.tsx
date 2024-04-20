import ColorButton from "@/components/color-button";
import RotateButton from "@/components/rotate-button";
import ScaleButton from "@/components/scale-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-white mx-96 text-center ">
      <div className="h-screen flex justify-center items-center text-6xl font-bold">
        <p>3 types d&apos;animation de bouton</p>
      </div>
      <div className="h-screen flex justify-center items-center text-black">
        <ColorButton />
      </div>

      <div className="flex gap-20 items-center justify-center my-4 h-screen text-black">
        <ScaleButton />
      </div>
      <div className="flex gap-20 items-center justify-center my-4 h-screen text-black">
        <RotateButton />
      </div>

      <div className="h-screen flex flex-col text-center gap-20 justify-center items-center text-5xl font-bold">
        <p>Mettez en commentaire votre bouton préféré</p>
      </div>
    </main>
  );
}
