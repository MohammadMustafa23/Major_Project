export default function Footer() {
  return (
    <footer className="bg-white border-t w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">StayFinder</h2>

            <p className="mt-4 text-gray-600">
              Discover unique stays, luxury villas, and unforgettable
              experiences across the world.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">Homes</li>
              <li className="hover:text-red-500 cursor-pointer">Villas</li>
              <li className="hover:text-red-500 cursor-pointer">Cabins</li>
              <li className="hover:text-red-500 cursor-pointer">Apartments</li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hosting</h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">
                Become a Host
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Host Resources
              </li>
              <li className="hover:text-red-500 cursor-pointer">Community</li>
              <li className="hover:text-red-500 cursor-pointer">
                Hosting Guide
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">Help Center</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-red-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 StayFinder. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-red-500">
              Facebook
            </a>

            <a href="#" className="text-gray-500 hover:text-red-500">
              Instagram
            </a>

            <a href="#" className="text-gray-500 hover:text-red-500">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
