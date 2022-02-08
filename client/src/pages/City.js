import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../utils/api';

const City = () => {
  const [cities, setCities] = useState([]);
  let { skip, limit } = useParams();

  useEffect(() => {
    API.get(`/?skip=${skip || 0}&limit=${limit || 10}`)
      .then((res) => {
        setCities(res.data.city);
      })
      .catch((e) => console.log(e));
  }, [limit, skip]);

  return (
    <div className='container-sm table-responsive'>
      <table
        className='table table-xs caption-top text-center'
        style={{ width: '30%' }}
      >
        <caption>List of City</caption>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Settings</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((e) => (
            <tr key={e._id}>
              <td>{e.name}</td>
              <td>
                <Link to={`/showWeather/${e.name}`}>
                  <span className='material-icons md-18'>edit</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default City;
