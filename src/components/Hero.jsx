import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[85vh] lg:h-[92vh] overflow-hidden">

      {/* Background Image With Slow Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Konkan_lake_sunset.jpg')",
          filter: "brightness(0.55)",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#C83A3A]/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        {/* TITLE (Zoom + Stagger) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl"
        >
          Experience Premium  
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-premiumGold"
          >
            Agro Tourism By The Lake
          </motion.span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-white/90 max-w-2xl text-lg"
        >
          Pure Kokani Hospitality • Lakeside Stay • Farm Experience • Nature Bliss
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="/booking"
            className="px-6 py-3 text-lg rounded-xl font-semibold shadow-xl bg-premiumRed text-white hover:bg-premiumRedDark transition"
          >
            Book Now
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919356128719"
            className="px-6 py-3 text-lg rounded-xl font-semibold shadow-xl bg-white text-premiumRed hover:bg-softRedBg transition"
          >
            WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* WAVY BORDER ANIMATION */}
      <motion.svg
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0h1440v60c-120 24-300 30-480 10C720 28 540 8 360 20 180 32 60 60 0 60V0z"
          fill="white"
        />
      </motion.svg>

    </section>
  );
}
