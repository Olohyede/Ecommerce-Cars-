import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function CarDetails() {
  const { make, model } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
      axios.get(
  `https://corsproxy.io/?${encodeURIComponent(
    `https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${make}&model=${model}&mode=json`
  )}`
      )
      .then((response) => {
        const result = response.data.Models[0]; 
        setCar(result);
      })
      .catch((error) => console.error("Error loading car:", error));
  }, [make, model]);

  if (!car) return <p className="p-8 text-gray-500">Loading car details...</p>;

  return (
    <motion.div
      className="p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl font-bold">
        {car.make_display} {car.model_name}
      </h1>

      <p className="text-gray-600 mt-3">Model Year: {car.model_year}</p>

      <p className="text-indigo-600 text-xl font-semibold mt-5">
        Estimated Price Range: ₦{(parseInt(car.model_year) * 50000).toLocaleString()}
      </p>

      <img
        src={`https://source.unsplash.com/featured/?${car.make_display},${car.model_name},car`}
        alt={`${car.make_display} ${car.model_name}`}
        className="w-full rounded-xl shadow-lg mt-6"
      />
    </motion.div>
  );
}

export default CarDetails;