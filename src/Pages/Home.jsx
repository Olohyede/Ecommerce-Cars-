import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import bgCar from "../assets/bg-car.jpg";

function Home() {
  return (


    <section
      className="h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgCar})` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold"
        >
          Drive Your Dream Car Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-lg text-gray-200"
        >
          Browse a wide collection of cars from trusted brands. Discover features, compare models, and find the best deals all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/cars"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Browse Cars
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


export default Home;



