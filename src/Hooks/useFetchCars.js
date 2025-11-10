import axios from "axios";
import { useState, useEffect } from "react";

function useFetchCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://www.carqueryapi.com/api/0.3/?cmd=getModels&year=2015-2022&mode=json"
        )}`
      )
      .then((response) => {
        const json = JSON.parse(response.data.contents);

        if (Array.isArray(json.Models)) {
          setCars(json.Models.slice(0, 60)); 
          
        } else {
          setCars([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
        setCars([]);
      });
  }, []);

  return cars;
}

export default useFetchCars;