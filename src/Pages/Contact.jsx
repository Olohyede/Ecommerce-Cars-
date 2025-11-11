import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-blue-600 mb-4 text-center"
      >
        Contact Us
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-xl text-gray-600 text-center mb-10"
      >
        Have questions or need assistance? Reach out to us, we’d love to hear from you!
      </motion.p>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <form className="space-y-5">
          <div>
            <label className="block text-left font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left font-medium text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-gray-500 text-sm mt-8"
      >
      </motion.p>
    </section>
  );
}

export default Contact;