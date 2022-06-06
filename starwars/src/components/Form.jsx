import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/${category}/${id}`)
    clearForm();
}

const clearForm=()=>{
    setId("");
    setCategory("");
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='category'> Search For: </label>
            <select name="category" value={category}
            onChange={e=> setCategory(e.target.value)}>
                <option hidden>Select</option>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select> 

            <label htmlFor='id'>  ID: </label>
            <input type="number" name="id" value={id} 
            onChange={e=>setId(e.target.value)}/>

            <button type='submit'>Search</button>
        </form>

    </div>
  )
}

export default Form