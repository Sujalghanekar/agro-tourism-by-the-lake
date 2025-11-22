export default function Pricing() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Packages & Pricing
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We offer flexible and customizable catering packages 
          for weddings, family gatherings, celebrations, and corporate events.
        </p>

        {/* ✅ Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Wedding Package */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Wedding Catering</h3>
            <p className="text-gray-500 mb-4">Traditional + Premium Dishes</p>

            <ul className="text-gray-700 text-sm space-y-2 text-left">
              <li>✅ Pure Kokani Taste</li>
              <li>✅ Veg / Non-Veg Menu Customizable</li>
              <li>✅ Buffet Arrangement</li>
              <li>✅ Decoration Add-on Available</li>
            </ul>

            <p className="text-2xl font-bold mt-6 text-red-700">₹250 - ₹450 / Plate</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="/booking" className="btn bg-red-600 hover:bg-red-700 text-white">
                Book Now
              </a>
              <a href="https://wa.me/919356128719" target="_blank"
                className="btn bg-green-600 hover:bg-green-700 text-white">
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Family & Birthday Events */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition border-2 border-red-600">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">
              Family / Birthday / Small Gatherings
            </h3>
            <p className="text-gray-500 mb-4">Light to Full Meal Options</p>

            <ul className="text-gray-700 text-sm space-y-2 text-left">
              <li>✅ Home Feel Taste</li>
              <li>✅ Freshly Prepared</li>
              <li>✅ Suitable for 10 - 100 People</li>
              <li>✅ Cake & Decor Support (Add-on)</li>
            </ul>

            <p className="text-2xl font-bold mt-6 text-red-700">₹150 - ₹350 / Plate</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="/booking" className="btn bg-red-600 hover:bg-red-700 text-white">
                Book Now
              </a>
              <a href="https://wa.me/919356128719" target="_blank"
                className="btn bg-green-600 hover:bg-green-700 text-white">
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Corporate Package */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Corporate / Group Catering</h3>
            <p className="text-gray-500 mb-4">Bulk Meal Service</p>

            <ul className="text-gray-700 text-sm space-y-2 text-left">
              <li>✅ High Quantity Capacity</li>
              <li>✅ Tiffin / Buffet Setup</li>
              <li>✅ Transportation Included</li>
              <li>✅ Billing / GST Available (If Required)</li>
            </ul>

            <p className="text-2xl font-bold mt-6 text-red-700">₹120 - ₹300 / Plate</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="/booking" className="btn bg-red-600 hover:bg-red-700 text-white">
                Book Now
              </a>
              <a href="https://wa.me/919356128719" target="_blank"
                className="btn bg-green-600 hover:bg-green-700 text-white">
                WhatsApp Inquiry
              </a>
            </div>
          </div>

        </div>

        {/* ✅ Stay Package */}
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Stay + Meals (Agro Tourism Experience)</h2>
          <p className="text-gray-600 text-lg">
            Lakeside Cottage Stay + Breakfast + Lunch + Dinner + Evening Snacks
          </p>

          <p className="text-3xl font-bold mt-6 text-red-700">₹899 - ₹1599 Per Person / Day</p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/booking" className="btn bg-red-600 hover:bg-red-700 text-white text-lg px-8">
              Book Stay
            </a>
            <a href="https://wa.me/919356128719" target="_blank"
              className="btn bg-green-600 hover:bg-green-700 text-white text-lg px-8">
              WhatsApp Inquiry
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
