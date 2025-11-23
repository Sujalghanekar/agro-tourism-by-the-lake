import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      title: "Wedding Catering",
      img: "/images/Indian_wedding_catering.jpg",
      desc: "Premium catering service for weddings with an authentic Konkan menu, pure taste, and complete event support.",
      price: "₹450 – ₹850 per plate",
      features: [
        "Live Counters",
        "Veg / Non-Veg Menu",
        "Full Event Food Management",
        "Customisable Menu Options"
      ]
    },
    {
      title: "Birthday / Family Events",
      img: "/images/birthday_catering_india.jpg",
      desc: "Perfect catering for birthdays, family gatherings, thread ceremonies and special occasions.",
      price: "₹350 – ₹650 per plate",
      features: [
        "Theme Menu Options",
        "Snacks + Lunch / Dinner",
        "On-Spot Serving Staff",
        "Decoration Support Available"
      ]
    },
    {
      title: "Corporate Catering",
      img: "/images/corporate_lunch_buffet.jpg",
      desc: "Professional and hygienic catering for office meetings, corporate lunches and business events.",
      price: "₹300 – ₹700 per plate",
      features: [
        "High-Quality Packaging",
        "Bulk Order Facility",
        "Healthy Menu Options",
        "Delivery + Setup Support"
      ]
    },
    {
      title: "Agro Tourism Stay + Meals",
      img: "/images/Konkan_homestay.jpg",
      desc: "Lakeside homestay with delicious home-style Konkan meals prepared with love and hygiene.",
      price: "₹1200 – ₹2000 per person",
      features: [
        "Veg + Non-Veg Meals",
        "Morning Breakfast Included",
        "Clean Rooms",
        "Peaceful Nature Location"
      ]
    }
  ];

  return (
    <div className="bg-softRedBg min-h-screen pb-20">

      {/* PAGE HERO */}
      <section
        className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/corporate_lunch_buffet.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Services
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Premium Catering & Homestay Experience with Pure Kokani Taste
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="tel:9356128719"
              className="px-6 py-3 bg-premiumRed rounded-xl text-white font-semibold hover:bg-premiumRedDark"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919356128719"
              className="px-6 py-3 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-premiumRed text-center mb-12">
          Catering & Homestay Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-premiumRed/20"
            >

              <img src={s.img} className="w-full h-64 object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-premiumRedDark">
                  {s.title}
                </h3>

                <p className="text-gray-600 mt-2">{s.desc}</p>

                <p className="mt-4 text-premiumRed font-semibold">
                  Price: {s.price}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-6">
                  <a
                    href="/booking"
                    className="flex-1 py-2 bg-premiumRed text-white rounded-lg font-semibold hover:bg-premiumRedDark text-center"
                  >
                    Book Now
                  </a>

                  <a
                    href="https://wa.me/919356128719"
                    className="flex-1 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* PRICING PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-premiumRed text-center mb-12">
          Catering Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* SILVER */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-300">
            <h3 className="text-xl font-bold text-premiumRed mb-2">Silver Package</h3>
            <p className="font-bold text-gray-700">₹350 – ₹500 per plate</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Basic Veg Meals</li>
              <li>2 Sabji + Rice + Roti</li>
              <li>Pickup & Delivery</li>
            </ul>
          </div>

          {/* GOLD */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-premiumRed">
            <h3 className="text-xl font-bold text-premiumRedDark mb-2">Gold Package</h3>
            <p className="font-bold text-gray-700">₹500 – ₹700 per plate</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Veg / Non-Veg Meals</li>
              <li>Starter + Main Course</li>
              <li>Event Setup Support</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-yellow-400">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Premium Package</h3>
            <p className="font-bold text-gray-700">₹700 – ₹950 per plate</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Special Konkan Menu</li>
              <li>Live Counters</li>
              <li>Full Event Management</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
