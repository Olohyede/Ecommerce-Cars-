import { Link } from 'react-router-dom'

function CarCard({ car }) {
  return (
    <Link
      to={`/car/${car.make_display}/${car.model_name}`}
      className="border p-4 rounded-lg shadow hover:scale-105 transition-transform bg-white"
    >
      <h2 className="text-xl font-semibold">{car.make_display}</h2>
      <p className="text-gray-700">{car.model_name}</p>
      <p className="text-gray-500 text-sm">Year: {car.model_year}</p>
    </Link>
  );
}


export default CarCard
    



