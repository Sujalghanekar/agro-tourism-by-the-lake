import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-softRedBg">

      {/* HERO SECTION */}
      <section
        className="w-full h-[45vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('src/assets/Konkan_homestay.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md">
            Contact Us
          </h1>
          <p className="mt-3 text-lg">
            We’re here to help you with catering, events & homestay bookings
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT CONTACT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-premiumRed/20"
        >
          <h2 className="text-3xl font-extrabold text-premiumRedDark mb-6 relative inline-block">
            Get In Touch
            <span className="absolute bottom-[-6px] left-0 w-2/3 h-1 bg-premiumRed rounded-xl"></span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg">

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <span className="text-premiumRed text-3xl">📍</span>
              <p>
                <strong>Address:</strong><br />
                At Post – Patpanhale, Kondwadi,<br />
                Near Khatu Masale Udyog,<br />
                Tal – Guhagar, Dist – Ratnagiri, 415724
              </p>
            </div>

            {/* PHONES */}
            <div className="flex items-start gap-4">
              <span className="text-premiumRed text-3xl">📞</span>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+919356128719" className="text-premiumRedDark underline">9356128719</a><br />
                <a href="tel:+918983911425" className="text-premiumRedDark underline">8983911425</a>
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <span className="text-premiumRed text-3xl">✉️</span>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:vikramkhair82@gmail.com" className="text-premiumRedDark underline">
                  vikramkhair82@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 space-y-4">
            <a
              href="tel:+919356128719"
              className="block w-full py-3 bg-premiumRed text-white rounded-xl text-lg font-semibold shadow hover:bg-premiumRedDark transition"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919356128719"
              target="_blank"
              className="block w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-96 rounded-2xl shadow-xl overflow-hidden border-4 border-premiumRed/30 shine-wrapper"
        >
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.4173464899121!2d73.22398730963135!3d17.485182784003612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9f1b5dd6c792f%3A0x8bd56f16be8976f9!2sShantai%20by%20The%20Lake%20-%20Guhagar!5e1!3m2!1sen!2sin!4v1763552273944!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </div>
  );
}
