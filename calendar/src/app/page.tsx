"use client";
import { Calendar } from "@/components/ui/calendar";
import { useTheme } from "next-themes";

import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-center items-center mt-8">
          <input
            type="checkbox"
            id="theme-toggle"
            className="hidden peer"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label
            htmlFor="theme-toggle"
            className="flex z-10 items-center peer relative justify-center w-14 h-14 shadow-lg duration-300 [box-shadow:2px_2px_0px_2px_#eab92d] border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-lg cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
          ></label>

          <svg
            className="absolute stroke-sky-800 w-12 h-23 duration-300 peer-checked:opacity-100 opacity-0"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className="svg-stroke-primary"
              d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            ></path>
          </svg>
          <svg
            className="absolute stroke-yellow-500 w-12 h-23 duration-300 peer-checked:opacity-0 opacity-100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className="svg-stroke-primary"
              d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            ></path>
          </svg>
        </div>
        <div className="m-6"></div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </>
  );
}
