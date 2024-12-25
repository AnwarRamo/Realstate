import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from './CityCard';

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/cities');
        setCities(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {cities && cities.length > 0 ? (
        cities.map((city) => (
          <CityCard key={city.id} city={city} properties={city.properties} />
        ))
      ) : (
        <p>No cities available.</p>
      )}
    </div>
  );
};

export default CityList;