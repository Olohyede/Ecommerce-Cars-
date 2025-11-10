function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold mb-2">CarMarket</h2>
        <p className="text-sm text-gray-400 mb-4">
          © {new Date().getFullYear()} CarMarket. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;