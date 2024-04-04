export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center justify-center gap-6 mt-8">
      <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Hover Me
      </button>
      {/* BOUTON 2 */}
      <div className="w-full flex items-center justify-center cursor-pointer">
        <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 text-green-400"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 text-green-400"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
            Button
          </span>
        </div>
      </div>
      {/* BOUTON 3 */}
      <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Hover For Tooltip
        </span>
        <div className="hidden group-hover:block">
          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            <div className="rounded-sm bg-black py-1 px-2">
              <p className="whitespace-nowrap">This is a tooltip.</p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
          </div>
        </div>
      </button>
      {/* BOUTON 4 */}
      <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
        <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
          <div className="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-zinc-600"
            >
              <circle stroke-linejoin="round" r="9" cy="12" cx="12"></circle>
              <path
                stroke-linejoin="round"
                d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
              ></path>
              <path
                stroke-linejoin="round"
                d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
              ></path>
              <path stroke-linejoin="round" d="M3 12H21"></path>
              <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
              <g filter="url(#filter0_d_15_556)">
                <path stroke-linejoin="round" d="M19.5 16.5H4.5"></path>
              </g>
              <defs>
                <filter
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="3"
                  width="17"
                  y="16"
                  x="3.5"
                  id="filter0_d_15_556"
                >
                  <feFlood
                    result="BackgroundImageFix"
                    flood-opacity="0"
                  ></feFlood>
                  <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    type="matrix"
                  ></feColorMatrix>
                  <feBlend
                    result="effect1_dropShadow_15_556"
                    in2="BackgroundImageFix"
                    mode="normal"
                  ></feBlend>
                  <feBlend
                    result="shape"
                    in2="effect1_dropShadow_15_556"
                    in="SourceGraphic"
                    mode="normal"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <span>special button</span>
          </div>
          <div className="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
            <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
          </div>
        </div>

        <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-zinc-600"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
            ></path>
          </svg>
          <span className="text-[0px] group-hover:text-sm duration-300">
            Check Our Website
          </span>
        </div>
      </div>
    </main>
  );
}
