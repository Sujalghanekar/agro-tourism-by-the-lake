import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // change path if needed

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Active Link Style
  const linkClass = (path) =>
    `relative text-lg font-semibold transition ${
      location.pathname === path
        ? "text-premiumRed"
        : "text-darkText hover:text-premiumRed"
    }`;

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "navbar-small bg-white/70 backdrop-blur-xl shadow-md"
          : "py-4 bg-white/30 backdrop-blur-lg"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="logo"
            className="h-12 w-auto drop-shadow-md shine-effect"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
          />
          <span className="text-xl font-bold text-premiumRedDark tracking-wide">
            Shantai By The Lake
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className={linkClass(item.path)}>
                {item.title}

                {/* Active underline */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-premiumRed rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-premiumRed text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg overflow-hidden"
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`${linkClass(item.path)} block py-2`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
