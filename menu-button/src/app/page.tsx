export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      {/* Menu 1 */}
      <label>
        <div className="w-[3.5rem] h-[5rem] cursor-pointer flex flex-col items-center justify-center">
          <input className="hidden peer" type="checkbox" />
          <div className="w-[62%] h-[4px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.9rem] peer-checked:rotate-[-45deg]"></div>
          <div className="w-[62%] h-[4px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
          <div className="w-[62%] h-[4px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.9rem] peer-checked:rotate-[45deg]"></div>
        </div>
      </label>
      {/* Menu 2 */}
      <label className="hamburger">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      {/* Menu 3 */}
      <label htmlFor="burger" className="burger">
        <input id="burger" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      {/* Menu 4 */}
      <label className="buttons__burger2" htmlFor="burger2">
        <input type="checkbox" id="burger2" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </main>
  );
}
