import React, { useState } from 'react';
import swal from 'sweetalert';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AddCity = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  return (
    <div className='container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          API.post('/', { name: city })
            .then((result) => swal('Alert', result.data).then(e => {
              if(e) navigate('/')
            }))
            .catch((err) => {
              swal('Alert', err.response.data);
            });
        }}
      >
        <div className='row g-3 align-items-center'>
          <div className='col-auto'>
            <label htmlFor='city' className='col-form-label'>
              Enter City
            </label>
          </div>
          <div className='col-auto'>
            <input
              type='text'
              id='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='form-control'
              aria-describedby='cityHelpInline'
            />
          </div>
          <div className='col-auto'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCity;
