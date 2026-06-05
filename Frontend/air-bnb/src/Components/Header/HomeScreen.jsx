export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Find Your Perfect Stay
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover unique homes, luxury villas, cozy cabins,
            and unforgettable experiences around the world.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
              "
            >
              Explore Homes
            </button>

            <button
              className="
                border
                border-gray-300
                hover:bg-gray-100
                px-8
                py-3
                rounded-xl
                font-semibold
              "
            >
              Become a Host
            </button>

          </div>

        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-red-500">
              100+
            </h2>
            <p className="mt-2 text-gray-600">
              Premium Properties
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-red-500">
              50+
            </h2>
            <p className="mt-2 text-gray-600">
              Cities Covered
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-red-500">
              1000+
            </h2>
            <p className="mt-2 text-gray-600">
              Happy Guests
            </p>
          </div>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Verified Listings
            </h3>

            <p className="mt-3 text-gray-600">
              Every property is reviewed and verified before listing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Secure Booking
            </h3>

            <p className="mt-3 text-gray-600">
              Safe and trusted booking experience for every guest.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Best Locations
            </h3>

            <p className="mt-3 text-gray-600">
              Stay at the most popular destinations across India.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}