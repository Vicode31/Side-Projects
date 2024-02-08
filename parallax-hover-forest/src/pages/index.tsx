import Head from "next/head";
import Layers from "@/components/Layers";
import Custumcursor from "@/components/Custumcursor";

import "../libs/rain";
import { mouseLeave, mouseMove } from "../libs/mouseTracking";

export default function Home() {
  return (
    <>
      <Head>
        <title>Parallax hover forest</title>
        <meta name="desciption" content="Generate by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
        <Custumcursor />
        {/* <div className="absolute w-[var(--logo-size)] h-[var(--logo-size)] bg-logo bg-no-repeat left-[calc(51%-calc(var(--logo-size)/2))] top-[calc(var(--index)*2.8)] z-[1]" /> */}
        <section className="overflow-hidden perspective">
          <Layers />
        </section>
      </main>
    </>
  );
}
