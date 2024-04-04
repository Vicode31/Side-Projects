"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Projets",
    path: "/",
  },
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const [toggle, setToggle] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleClick = () => {
    setNavbar(!navbar);
    setToggle(!toggle);
  };

  console.log(pathname);
  return (
    <div className="borderbottom pt-4 flex items-center justify-center fixed top-0 left-0 w-full z-30  ">
      <nav className="w-full py-4 lg:py:0">
        <div>
          <div className="flex items-center justify-end">
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={handleClick}
              >
                {navbar ? (
                  <p className="text-6xl mr-4">&#10539;</p>
                ) : (
                  <GiHamburgerMenu className="mr-4 text-6xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION BAR FOR DESKTOP */}
        <div>
          <div
            className={`pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "p-12 lg:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen lg:h-auto items-center flex-col flex lg:flex-row gap-10 lg:gap-16 text-center lg:justify-end text-3xl lg:text-xl px-16">
              {routes.map((route, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`nav-item relative ${
                      pathname === route.path && "text-white"
                    }`}
                    onClick={handleClick}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link href={route.path}>{route.title}</Link>
                    {hoveredItem === index && (
                      <div className="point absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
            <div className="point absolute bottom-0 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full hidden"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
