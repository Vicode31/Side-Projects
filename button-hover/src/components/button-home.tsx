"use client";

import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";

const ICON = require("./regular-home.json");

export default function ButtonHome() {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return <Player ref={playerRef} icon={ICON} size={100} />;
}
