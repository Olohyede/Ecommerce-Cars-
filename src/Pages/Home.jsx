import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Home() {
    return(
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold"
      >
        Find Your Perfect Car
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 mt-4 max-w-lg"
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
    </section>
    )
}

export default Home