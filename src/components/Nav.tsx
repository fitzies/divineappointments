"use client";

// Import necessary libraries and components
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import Button from "./Button";
import { useState, MouseEvent, FC } from "react";

// Props for NavLink component
interface NavLinkProps {
  href: string;
  children: JSX.Element | string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

// Component for navigation links
const NavLink: FC<NavLinkProps> = ({ href, children, onClick }) => (
  <Link href={href.toLowerCase()} className="text-hover" onClick={onClick}>
    {children}
  </Link>
);

// Main navigation component
const Nav: FC = () => {
  // State for managing the visibility of the menu
  const [menuNav, setMenuNav] = useState<boolean>(false);

  // Function to toggle the visibility of the menu
  const toggleMenuNav = () => setMenuNav(!menuNav);

  // Navigation items
  const navItems = ["Directory", "About"];

  return (
    <>
      <div className="w-screen items-center gap-4 lg:px-24 px-8 py-4 lg:flex hidden mr-8">
        <NavLink href="/">
          <span className="font-bold mr-10">Divine Appointments</span>
        </NavLink>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink key={item} href={`/${item}`}>
              {item}
            </NavLink>
          ))}
        </div>

        <div className="lg:ml-auto flex items-center gap-6 lg:visible invisible">
          {/* <div className="text-hover">Apply</div> */}
          <button className="btn !py-1 !font-medium">Apply</button>
        </div>
      </div>

      <div className="lg:invisible visible w-screen flex justify-end px-8 mt-6">
        <div onClick={toggleMenuNav} className="text-xl">
          ≡
        </div>
      </div>

      <AnimatePresence>
        {menuNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen bg-white z-10 absolute flex flex-row px-8 pb-48"
          >
            <div className="flex flex-col gap-6">
              <NavLink href="/" onClick={toggleMenuNav}>
                Home
              </NavLink>
              {navItems.map((item) => (
                <NavLink key={item} href={item} onClick={toggleMenuNav}>
                  {item}
                </NavLink>
              ))}
              <div className="mt-auto flex flex-col gap-6 w-full">
                <NavLink href="/apply" onClick={toggleMenuNav}>
                  Apply
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
