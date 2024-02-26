import Image from "next/image";
import { DeleteButton } from "./components/DeleteButton";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <DeleteButton />
    </main>
  );
}
