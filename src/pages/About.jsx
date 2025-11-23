import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-softRedBg">

      {/* 🔥 TOP BANNER (Parallax + Dark Overlay) */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          src="/images/Konkan_lake_sunset.jpg"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience authentic Konkan hospitality by the serene lakeside.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* 🔥 OUR STORY (Image + Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <motion.img
              src="/images/homestay_konkan_interior.jpg"
              className="w-full h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-premiumRed/20"
          >
            <h2 className="text-3xl font-extrabold text-premiumRedDark mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              We started with a simple dream — to share the real taste of
              Konkan and the peaceful homestay experience by the lake.
              <br /><br />
              Our food is homemade, hygienic, and filled with authentic
              traditional flavors passed through generations. Guests enjoy
              nature, calm atmosphere, and heartfelt hospitality that feels like home.
            </p>
          </motion.div>

        </div>

        {/* 🔥 VISION & MISSION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl shadow-xl border-l-8 border-premiumRed hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-bold text-premiumRed mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To preserve the Konkan lifestyle and share its natural beauty,
              authentic food, and cultural warmth with every guest.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white rounded-2xl shadow-xl border-l-8 border-premiumRed hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-bold text-premiumRed mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To provide hygienic homemade food, peaceful stay, and a
              nature-connected experience that refreshes mind and soul.
            </p>
          </motion.div>

        </div>

      </section>
    </div>
  );
}
