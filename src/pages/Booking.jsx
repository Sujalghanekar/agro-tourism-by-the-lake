import { useState } from "react";

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

    const whatsappMessage = `New Booking / Inquiry:
Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Date: ${date}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/919356128719?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-red-700 mb-6">
          Booking / Inquiry Form
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill your details and we will contact you shortly.
        </p>

        {/* FORM */}
        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <select
            name="eventType"
            className="select select-bordered w-full"
            onChange={handleChange}
          >
            <option value="">Select Event Type</option>
            <option value="Wedding Catering">Wedding Catering</option>
            <option value="Birthday / Family Event">Birthday / Family Event</option>
            <option value="Corporate Catering">Corporate Catering</option>
            <option value="Stay + Food Package">Stay + Food Package</option>
          </select>

          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            className="textarea textarea-bordered w-full h-28"
            onChange={handleChange}
          ></textarea>

        </div>

        {/* BUTTON */}
        <button
          onClick={sendToWhatsApp}
          className="btn bg-red-600 hover:bg-red-700 text-white text-lg w-full mt-8"
        >
          Submit & Send to WhatsApp
        </button>

      </div>
    </div>
  );
}
