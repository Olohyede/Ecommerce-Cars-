import { Link } from 'react-router-dom'

function CarCard({ car }) {
    return(
        <Link to={`/car/${car.id}`} className="border p-4 rounded shadow hover:scale-105 transition">
      <h2 className="font-semibold text-lg">{car.make.name}</h2>
      <p>{car.name}</p>
      <p className="text-gray-600 text-sm">Model: {car.year}</p>
    </Link>
    )
}


export default CarCard
    