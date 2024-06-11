"use client";

import { Player } from "@lordicon/react";
import { useRef } from "react";

const ICON = require("./regular-2-home.json");

export default function ButtonHome() {
  const playerRef = useRef<Player>(null);

  // Si je veux activer l'animation au chargement de la page
  // useEffect(() => {
  //   playerRef.current?.playFromBeginning();
  // }, []);

  return (
    <div
      onMouseOver={() => playerRef.current?.playFromBeginning()}
      onMouseLeave={() => playerRef.current?.goToFirstFrame()}
    >
      <Player ref={playerRef} icon={ICON} size={50} colorize="#08C18A" />
    </div>
  );
}
