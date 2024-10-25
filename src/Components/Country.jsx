import { useState } from 'react';
import './Countries.css'
const Country = ({ country, handleVisitedCountries, handleVisitedFlag, handleAddToCard }) => {
    // console.log(country)
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div style={{ backgroundColor: visited ? 'black' : '' }} className="country">
            <h3>Country Name: {country.name?.common}</h3>
            <h3>Capital Name: {country?.capital?.length > 0 ? country?.capital[0] : 'NaN'}</h3>
            <h3>Population: {country?.population}</h3>
            <h3>Area: {country?.area}</h3>
            <img style={{ width: '250px', height: '150px', borderRadius: '5px', margin: '0 auto' }} src={country?.flags?.png}></img>
            <div className='btn_container'>
                <button className='buttons' onClick={() => handleVisitedCountries(country)}>Add Visited</button>
                <button className={` ${visited ? 'bg' : 'back'}`} onClick={() => handleVisited()}>{visited ? "Visited" : 'Going..'} </button>

            </div>
            <div className="btn_container">
                <button style={{ backgroundColor: 'gray', width: '', margin: '0 auto' }} onClick={() => handleVisitedFlag(country?.flags?.png)}>Add Flag</button>
                <button onClick={() => handleAddToCard(country)}>Purshace</button>
            </div>
            {visited ? 'I want to Visit' : 'I have Visited this country.'}
        </div>
    );
};

export default Country;