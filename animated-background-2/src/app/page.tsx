import Background from "./components/background";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Background />
      <section>
        <div className=" backdrop-blur-lg rounded-2xl shadow-lg p-12 mt-72 text-center">
          <h1 className="text-white text-7xl">Arrière-plan animé</h1>
          <p className="text-5xl mt-8">
            Pour ajouter un côté dynamique à votre site
          </p>
        </div>
      </section>
    </main>
  );
}
