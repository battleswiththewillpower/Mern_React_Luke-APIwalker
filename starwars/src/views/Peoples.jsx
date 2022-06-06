import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Peoples = () => {
    const {id} = useParams();
    const [people, setPeopleData] = useState();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{
                // console.log(response.data)
                setPeopleData(response.data)})
            .catch(err=>console.log(err))
    }, [id]); 
 
    
  return (
    <div>
        {
            people?
            <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height} cm </p>
            <p>Mass: {people.mass} kg</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color} </p>
            </div>:
            <h2>"These aren't the droids you're looking for" </h2>
            
        }

    </div>

  )
}

export default Peoples