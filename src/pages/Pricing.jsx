import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="bg-softRedBg min-h-screen py-20 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-premiumRedDark mb-4">
          Packages & Pricing
        </h1>

        <p className="text-gray-700 text-lg">
          Flexible catering & homestay packages designed for all types of events.
        </p>
      </motion.div>

      {/* PRICING GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {/* WEDDING PACKAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-premiumRed/20 hover:-translate-y-2 transition-transform"
        >
          <h3 className="text-2xl font-bold text-premiumRed mb-2">Wedding Catering</h3>
          <p className="text-gray-600 mb-4">Traditional + Premium Menu</p>

          <ul className="text-gray-700 text-base space-y-2 text-left">
            <li>• Pure Kokani Taste</li>
            <li>• Veg / Non-Veg Menu</li>
            <li>• Buffet Arrangement</li>
            <li>• Decoration Add-on</li>
          </ul>

          <p className="text-3xl font-bold mt-6 text-premiumRedDark">
            ₹250 – ₹450 / Plate
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/booking"
              className="w-full py-3 bg-premiumRed text-white rounded-xl font-semibold hover:bg-premiumRedDark"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/919356128719"
              target="_blank"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>

        {/* FAMILY / BIRTHDAY PACKAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-xl border-2 border-premiumRed hover:-translate-y-2 transition-transform"
        >
          <h3 className="text-2xl font-bold text-premiumRed mb-2">
            Family / Birthday Events
          </h3>
          <p className="text-gray-600 mb-4">Light to Full Meal Options</p>

          <ul className="text-gray-700 text-base space-y-2 text-left">
            <li>• Home Feel Taste</li>
            <li>• Freshly Prepared</li>
            <li>• Suitable for 10–100 People</li>
            <li>• Decoration Support</li>
          </ul>

          <p className="text-3xl font-bold mt-6 text-premiumRedDark">
            ₹150 – ₹350 / Plate
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/booking"
              className="w-full py-3 bg-premiumRed text-white rounded-xl font-semibold hover:bg-premiumRedDark"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/919356128719"
              target="_blank"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>

        {/* CORPORATE PACKAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-premiumRed/20 hover:-translate-y-2 transition-transform"
        >
          <h3 className="text-2xl font-bold text-premiumRed mb-2">
            Corporate Catering
          </h3>
          <p className="text-gray-600 mb-4">Bulk & Office Meals</p>

          <ul className="text-gray-700 text-base space-y-2 text-left">
            <li>• High Quantity Capacity</li>
            <li>• Tiffin / Buffet Setup</li>
            <li>• Transportation Included</li>
            <li>• GST Billing Available</li>
          </ul>

          <p className="text-3xl font-bold mt-6 text-premiumRedDark">
            ₹120 – ₹300 / Plate
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/booking"
              className="w-full py-3 bg-premiumRed text-white rounded-xl font-semibold hover:bg-premiumRedDark"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/919356128719"
              target="_blank"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>

      </div>

      {/* STAY PACKAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24 bg-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border border-premiumRed/20"
      >
        <h2 className="text-3xl font-extrabold text-premiumRedDark mb-4 text-center">
          Stay + Meals (Agro Tourism Experience)
        </h2>

        <p className="text-gray-700 text-lg text-center">
          Lakeside Stay + Breakfast + Lunch + Dinner + Evening Snacks Included
        </p>

        <p className="text-4xl font-bold mt-6 text-premiumRedDark text-center">
          ₹899 – ₹1599 Per Person / Day
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="/booking"
            className="px-10 py-3 bg-premiumRed text-white text-lg rounded-xl font-semibold hover:bg-premiumRedDark"
          >
            Book Stay
          </a>
          <a
            href="https://wa.me/919356128719"
            target="_blank"
            className="px-10 py-3 bg-green-600 text-white text-lg rounded-xl font-semibold hover:bg-green-700"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </motion.div>

    </div>
  );
}
