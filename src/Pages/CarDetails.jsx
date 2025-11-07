import { use } from "react";

function CarDetails(){
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get(`https://carapi.app/api/models/${id}`)
        .then(response => setCar(response.data.data))
        .catch(error => console.error(error));
    }, [id]);

    if (!car) return <p>Loading...</p>

    return (
        <motion.div
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
    >
        <h1 className="text-3xl font-bold">{car.make.name} {car.name}</h1>
        <p className="text-gray-700 mt-2">Model Year: {car.year}</p>
        <p className="text-lg font-semibold mt-3">Estimated Price: ₦{car.year * 50000}</p>
        </motion.div>
    );
}

export default CarDetails;