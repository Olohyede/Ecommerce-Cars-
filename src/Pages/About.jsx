import { motion } from "framer-motion";
import aboutCar from "../assets/about-car.jpg";



function About() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50">
      {/* === ABOUT SECTION WITH BACKGROUND === */}
      <div
        className="relative w-full flex flex-col justify-center items-center text-center px-6 py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutCar})`,
        }}
      >
        {/* Transparent overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-white max-w-3xl"
        >
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Welcome to <span className="font-semibold text-blue-400">CarMarket</span> — 
            your trusted destination for discovering, comparing, and buying cars 
            from top global brands. We believe car shopping should be effortless, 
            transparent, and exciting.
          </p>
        </motion.div>
      </div>

      {/* === OUR MISSION SECTION (separate, plain background) === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 mb-20 bg-white shadow-xl rounded-2xl p-10 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To revolutionize how people buy and discover cars — blending technology, 
          design, and trust to create a world-class experience that connects 
          car enthusiasts and everyday drivers alike.
        </p>
      </motion.div>
    </section>
  );
}




export default About;