import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-28 w-full overflow-hidden">

      {/* Background glossy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-black opacity-95"></div>

      {/* Glossy reflection */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 to-transparent opacity-20 blur-xl"></div>

      {/* Red glow shape */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-premiumRed/40 rounded-full blur-[130px]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left text-gray-200">

          {/* ABOUT + LOGO */}
          <div className="flex flex-col items-center md:items-start">
            <motion.img
              src="/images/logo.png"
              className="w-24 h-24 rounded-3xl shadow-xl border border-white/10 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h3 className="text-2xl font-bold text-white mt-4 tracking-wide">
              Agro Tourism By The Lake
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-sm">
              Experience authentic Konkan hospitality with lakeside beauty,
              premium homestay comfort, and delicious traditional cuisine.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg font-medium">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([text, link], i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <a href={link} className="hover:text-premiumRed transition-all">
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5 tracking-wide">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300 text-lg font-medium">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-premiumRed" /> 9356128719 / 8983911425
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-premiumRed" /> vikramkhair82@gmail.com
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaLocationDot className="text-premiumRed" /> Patpanhale, Guhagar, Ratnagiri
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 justify-center md:justify-start mt-6">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "https://instagram.com" },
                { icon: <FaWhatsapp />, link: "https://wa.me/919356128719" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-full shadow-lg hover:bg-premiumRed transition-all"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto h-[1px] bg-white/10 mt-14 mb-6 max-w-5xl"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-gray-400 text-lg">
          © {new Date().getFullYear()} Shantai By The Lake — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
