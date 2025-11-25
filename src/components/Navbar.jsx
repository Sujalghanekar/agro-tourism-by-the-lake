import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/images/logo.png"; // public folder path ✔

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  const linkClass = (path) =>
    `relative text-lg font-semibold transition-all duration-300 ${location.pathname === path
      ? "text-premiumRed"
      : "text-darkText hover:text-premiumRed"
    }`;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg py-2"
          : "bg-white/30 backdrop-blur-lg py-4"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-12 w-12 object-contain rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />
          <span className="text-xl font-bold text-premiumRedDark tracking-wide">
            Agro Tourism By The Lake
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className={linkClass(item.path)}>
                {item.title}

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-premiumRed rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-premiumRed text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.path}
                    className={`${linkClass(item.path)} block py-2`}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
