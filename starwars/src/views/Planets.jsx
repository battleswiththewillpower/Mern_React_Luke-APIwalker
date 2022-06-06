import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planets = () => {
    const {id} = useParams();
    const [planet, setPlanetData] = useState();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                // console.log(response.data)
                setPlanetData(response.data)})
            .catch(err=>console.log(err))
    }, [id]); 


  return (
    <div>
    {
        planet?
        <div>
        <h1>{planet.name}</h1>
        <p>Climate: {planet.height} cm </p>
        <p>Terrain: {planet.mass} kg</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Population: {planet.population} </p>
        </div>:
        <h1>Information doesn't exist</h1>
    }

</div>
  )
}

export default Planets