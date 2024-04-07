import { useState } from 'react';
import './country.css';
const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,population} = country;
    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={handleVisited}>
                {visited? "Visited" : "Going"}</button><br />
            {
                visited? 'I have visit this country':'I want to visite'
            }
        </div>
    );
};

export default Country;