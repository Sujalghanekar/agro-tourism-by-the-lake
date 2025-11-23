import { useState } from "react";
import { motion } from "framer-motion";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, eventType, date, message } = formData;

    if (!name || !phone) {
      alert("Please enter your Name and Phone Number");
      return;
    }

    const whatsappMessage = `🌿 *New Booking / Inquiry*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
🎯 *Event Type:* ${eventType || "Not Provided"}
📅 *Date:* ${date || "Not Provided"}

📝 *Message:* ${message || "No additional message"}`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919356128719?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-softRedBg py-20 px-6 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-premiumRed/20"
      >
        <h1 className="text-4xl font-extrabold text-premiumRedDark text-center mb-3">
          Booking / Inquiry
        </h1>

        <p className="text-gray-700 text-center mb-10">
          Fill in your details — we will respond within a few minutes.
        </p>

        <div className="space-y-6">

          {/* NAME */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-premiumRed focus:outline-none"
              placeholder="Your Full Name"
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-premiumRed focus:outline-none"
              placeholder="Your Phone Number"
              onChange={handleChange}
            />
          </div>

          {/* EVENT TYPE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Event Type</label>
            <select
              name="eventType"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-premiumRed"
              onChange={handleChange}
            >
              <option value="">Select Event Type</option>
              <option value="Wedding Catering">Wedding Catering</option>
              <option value="Birthday / Family Event">Birthday / Family Event</option>
              <option value="Corporate Catering">Corporate Catering</option>
              <option value="Stay + Food Package">Stay + Food Package</option>
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Event Date</label>
            <input
              type="date"
              name="date"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-premiumRed focus:outline-none"
              onChange={handleChange}
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
            <textarea
              name="message"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 h-28 resize-none focus:ring-2 focus:ring-premiumRed"
              placeholder="Write any additional information..."
              onChange={handleChange}
            ></textarea>
          </div>

        </div>

        {/* SUBMIT BUTTON */}
        <motion.button
          onClick={sendToWhatsApp}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-8 py-4 rounded-xl bg-premiumRed text-white font-semibold text-lg shadow-md hover:bg-premiumRedDark transition"
        >
          Submit & Send to WhatsApp
        </motion.button>
      </motion.div>
    </div>
  );
}
