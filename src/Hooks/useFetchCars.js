import axios from 'axios';
import { useState, useEffect, use } from 'react';

function useFetchCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("https://carapi.app/api/models?limit=60")
            .then(response => setCars(response.data.data))
            .catch(error => console.log(error));
    }, []);

    return cars;
}

export default useFetchCars;