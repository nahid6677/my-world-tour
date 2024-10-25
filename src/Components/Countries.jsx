import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = country => {
        // console.log('handleVisitedCountries')
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag)
    }

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const [cart, setCart] = useState([]);

    const handleAddToCard = bottle =>{
        // console.log(bottle.name?.common)
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div className="container">
            <h4>Cart: {cart.length}</h4>
            <h3>Countries all: {countries.length}</h3>
            <div>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country?.cca2}>{country?.name?.common}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    visitedFlag.map(flag => <img style={{ width: '100px', height: '60px', margin: '5px' }} key={`zxE${flag}`} src={flag}></img>)
                }
            </div>
            <div className="country-contuner">
                {countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} handleAddToCard={handleAddToCard}></Country>)}
            </div>
        </div>

    );
};

export default Countries;