import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ submitSearch }) {
    const [ location, setLocation ] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if ( !location || location === '' ) return;
        submitSearch(location);
      }


  return (
    <form className='search' onSubmit={onSubmit}>
        <input
            type='text'
            aria-label='location'
            placeholder='input your location'
            value={location}
            required
            onChange={ e => setLocation(e.target.value)}
        />

        <button className='Btn' type='submit' onSubmit={onSubmit}>Search</button>
    </form>
  )
}

Search.propTypes = {
  submitSearch: PropTypes.func.isRequired,
}

export default Search