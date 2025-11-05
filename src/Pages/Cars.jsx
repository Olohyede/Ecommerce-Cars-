import useFetchCars from "../Hooks/useFetchCars";
import CarCard from "../Components/CarCard";
import { motion } from "framer-motion";


function Cars() {
const cars = useFetchCars();

  return (
   <div className="grid grid-cols-3 gap-6 p-6">
    {cars.map((car,index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        >
        <CarCard car={car} />
        </motion.div>
    ))}
   </div>
  )
}


export default Cars