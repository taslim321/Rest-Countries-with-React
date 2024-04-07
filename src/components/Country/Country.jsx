import './country.css';
const Country = ({country}) => {
    const {name,flags,population} = country;
    return (
        <div className="country">
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
        </div>
    );
};

export default Country;