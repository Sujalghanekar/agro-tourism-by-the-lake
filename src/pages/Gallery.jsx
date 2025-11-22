import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export default function Gallery() {

    const allImages = [
        { src: "src/assets/Catering1.jpg", tag: "Catering" },
        { src: "src/assets/Events.jpg", tag: "Events" },
        { src: "src/assets/Catering2.jpg", tag: "Catering" },
        { src: "src/assets/Homestay1.jpg", tag: "Homestay" },
        { src: "src/assets/catering3.jpg", tag: "Catering" },
        { src: "src/assets/Nature1.jpg", tag: "Nature" },
        { src: "src/assets/Homestay2.jpg", tag: "Homestay" },
        { src: "src/assets/Nature2.jpg", tag: "Nature" },
        { src: "src/assets/Homestay3.jpg", tag: "Homestay" },
        { src: "src/assets/Homestay4.jpg", tag: "Homestay" },
        { src: "src/assets/Homestay5.jpg", tag: "Homestay" }
    ];

    const filters = ["All", "Catering", "Events", "Homestay", "Nature"];

    const [category, setCategory] = useState("All");
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const filteredImages =
        category === "All"
            ? allImages
            : allImages.filter((img) => img.tag === category);

    // Tilt Hover Effect
    const handleTilt = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / 18) * -1;
        const rotateY = (x - midX) / 18;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const clearTilt = (e) => {
        e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div className="bg-softRedBg min-h-screen pb-28">

            {/* PAGE TITLE */}
            <div className="text-center pt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-premiumRedDark">
                    Our Gallery
                </h1>
                <p className="text-gray-700 mt-3 text-lg">
                    Catering • Events • Homestay • Nature Moments
                </p>
            </div>

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {filters.map((f, i) => (
                    <button
                        key={i}
                        onClick={() => setCategory(f)}
                        className={`px-6 py-2 rounded-full border font-semibold transition
                            ${category === f
                                ? "bg-premiumRed text-white border-premiumRedDark"
                                : "bg-white text-premiumRed border-premiumRed/30 hover:bg-premiumRed hover:text-white"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* GALLERY GRID */}
            <div className="max-w-6xl mx-auto px-6 mt-12">
                <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">

                    {filteredImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onMouseMove={handleTilt}
                            onMouseLeave={clearTilt}
                            onClick={() => { setIndex(i); setOpen(true); }}
                            className="shine-wrapper floating tilt-card overflow-hidden rounded-xl cursor-pointer border border-premiumRed/20"
                        >
                            <motion.img
                                src={img.src}
                                className="w-full h-auto object-cover rounded-xl"
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.15 }}
                            />
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* LIGHTBOX VIEW */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={filteredImages}
                    plugins={[Zoom, Thumbnails]}
                />
            )}

        </div>
    );
}
