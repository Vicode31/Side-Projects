import RotateOrigin from "@/components/RotateOrigin";
import Scale from "@/components/Scale";
import ScaleDiag from "@/components/ScaleDiag";
import Translate from "@/components/Translate";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Scale />
      <Translate />
      <RotateOrigin />
      <ScaleDiag />
    </main>
  );
}
