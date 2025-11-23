import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Hero from "../components/Hero";

/* --------------------------
   3D Tilt Card Logic
----------------------------*/
const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 25) * -1;
    const rotateY = (x - centerX) / 25;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
};

const clearTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
};

export default function Home() {

    /* GALLERY IMAGES – PUBLIC FOLDER */
    const galleryImages = [
        { src: "/images/homestay_konkan_interior.jpg" },
        { src: "/images/Homestay1.jpg" },
        { src: "/images/birthday_catering_india.jpg" },
        { src: "/images/Konkan_homestay.jpg" },
        { src: "/images/Nature2.jpg" },
        { src: "/images/Homestay4.jpg" },
    ];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div className="relative bg-softRedBg">

            {/* HERO */}
            <Hero />

            {/* WHY CHOOSE US */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-10 text-premiumRed">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            ["🌿", "Pure Kokani Taste", "Authentic coastal recipes."],
                            ["🧼", "Hygienic Kitchen", "Fresh & Clean Ingredients."],
                            ["🍽️", "Event Catering", "Weddings • Birthdays • Corporate."],
                            ["🌄", "Lake-Side Stay", "Peaceful Agro Homestay."]
                        ].map(([icon, title, desc], i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.12 }}
                                className="why-card p-6 text-center"
                            >
                                <span className="text-5xl icon-pulse">{icon}</span>
                                <h3 className="text-xl font-bold mt-4 text-premiumRedDark">
                                    {title}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">{desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ABOUT */}
            <section className="py-20 bg-softRedBg">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="about-img h-96 bg-cover bg-center rounded-xl shadow-xl"
                        style={{ backgroundImage: `url('/images/homestay_konkan_interior.jpg')` }}
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-premiumRed/20"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-premiumRedDark mb-6">
                            A Taste of Kokani Hospitality
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Experience authentic Konkan hospitality, peaceful lakeside views,
                            fresh homemade food, and a relaxing agro-tourism stay.
                        </p>

                        <a
                            href="/about"
                            className="inline-block mt-6 px-7 py-3 rounded-xl bg-premiumRed text-white font-semibold"
                        >
                            Learn More
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-10 text-premiumRed">
                        Our Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[
                            ["Wedding Catering", "/images/Indian_wedding_catering.jpg",
                                "Premium catering for weddings & big functions."],
                            ["Family / Birthday Events", "/images/birthday_catering_india.jpg",
                                "Perfect for birthdays and family celebrations."],
                            ["Corporate Catering", "/images/corporate_lunch_buffet.jpg",
                                "Professional corporate catering services."],
                            ["Stay + Meals (Agro Tourism)", "/images/Konkan_homestay.jpg",
                                "Peaceful agro stay with authentic meals."]
                        ].map(([title, src, desc], i) => (
                            <div
                                key={i}
                                className="perspective w-full h-72 tilt-card"
                                onMouseMove={handleTilt}
                                onMouseLeave={clearTilt}
                            >

                                <div className="flip-card relative w-full h-full">

                                    {/* FRONT */}
                                    <div className="flip-front absolute inset-0 rounded-xl overflow-hidden shadow-lg">
                                        <img src={src} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <h3 className="absolute bottom-4 left-4 text-xl text-white font-semibold">
                                            {title}
                                        </h3>
                                    </div>

                                    {/* BACK */}
                                    <div className="flip-back absolute inset-0 rounded-xl bg-white shadow-xl p-5 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-premiumRed">{title}</h3>
                                            <p className="text-darkText/70 text-sm">{desc}</p>
                                        </div>
                                        <a
                                            href="/services"
                                            className="mt-4 py-2 bg-premiumRed text-white rounded-lg text-center font-semibold"
                                        >
                                            Learn More
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* GALLERY */}
            <section className="py-16 bg-softRedBg">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-10 text-premiumRedDark">
                        Gallery
                    </h2>

                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                onClick={() => { setIndex(i); setOpen(true); }}
                                className="shine-wrapper floating rounded-xl cursor-pointer border border-premiumRed/20 overflow-hidden"
                            >
                                <motion.img
                                    src={img.src}
                                    className="w-full h-full object-cover rounded-xl"
                                    whileHover={{ scale: 1.10 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold text-premiumRed mb-10">
                        What Guests Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            ["Amazing food, peaceful atmosphere & warm people.", "– Tejas G."],
                            ["Our family event catering was perfect.", "– Prajakta S."],
                            ["The lakeside stay was refreshing. Excellent hospitality.", "– Nilesh R."]
                        ].map(([text, name], i) => (
                            <motion.div
                                key={i}
                                className="bg-softRedBg p-6 rounded-xl shadow-md border border-premiumRed/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <p className="text-gray-700 italic">{text}</p>
                                <h4 className="mt-4 font-semibold text-premiumRedDark">{name}</h4>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* LIGHTBOX */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={galleryImages}
                    index={index}
                    plugins={[Thumbnails, Zoom]}
                />
            )}

        </div>
    );
}
