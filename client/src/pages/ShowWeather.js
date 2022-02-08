import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import API from '../utils/api';

const ShowWeather = () => {
  const [cities, setCities] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    API.get(`/getByCity/${id}`)
      .then((e) => setCities(e.data))
      .catch((err) => {
        console.log(err);
        swal('Alert', 'No data found');
      });
  }, [id]);

  return (
    <div className='container'>
      For City {id}
      <div className='row row-cols-2'>
        {cities.map((res) => (
          <div className='card col m-2' style={{ width: '18rem' }} key={res.dt}>
            <div>Clouds: {res.clouds.all}</div>
            <div>temp : {res.main.temp}</div>
            <div> Pressure : {res.main.pressure}</div>
            <div>Sea Level : {res.main.sea_level}</div>
            <div>Humidity : {res.main.humidity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowWeather;
