export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADING */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-700">About Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            A peaceful lakeside stay and fresh Kokani catering experience run with love, simplicity, and tradition.
          </p>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.ibb.co/Z1bxC0b/agro-homestay.jpg"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Started with the idea of sharing true Konkani hospitality, we prepare food just like home — fresh, hygienic, and full of love. Guests experience calm lakeside nature, local culture, and traditional recipes passed across generations.
            </p>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">To preserve and share authentic Konkan experiences with the world.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">Serve homely food, peaceful stay, and nature-connected hospitality.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
