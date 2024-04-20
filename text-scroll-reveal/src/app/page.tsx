//Lien YTB https://www.youtube.com/watch?v=zqPy1bHUjrg
import Character from "@/components/Character";
import Paragraph from "@/components/Paragraph";
import Words from "@/components/Words";

const paragraph =
  "Trois mode d'appariton de textes. Le premier est l'apparition du paragraphe en entier. Le second est l'apparition des mots individuels. Le dernier est l'apparition des caractères individuels.";

export default function Home() {
  return (
    <main className="mx-44">
      <div style={{ height: "100vh" }}></div>
      <h1 className="text-6xl text-center text-black">Paragraphe entier</h1>
      <Paragraph paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <h1 className="text-6xl text-center text-black">Mot par Mot</h1>
      <Words paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <h1 className="text-6xl text-center text-black">Lettre par lettre</h1>
      <Character paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
