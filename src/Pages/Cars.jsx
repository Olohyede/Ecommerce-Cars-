import useFetchCars from "../Hooks/useFetchCars";
import CarCard from "../Components/CarCard";
import { motion } from "framer-motion";

function Cars() {
  const cars = useFetchCars();

  // ✅ Prevent crash when cars is undefined or still loading
  if (!cars || !Array.isArray(cars)) {
    return <p className="p-6 text-center text-gray-500">Loading cars...</p>;
  }

  if (cars.length === 0) {
    return <p className="p-6 text-center text-gray-500">No cars found.</p>;
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </motion.div>
  );
}

export default Cars;