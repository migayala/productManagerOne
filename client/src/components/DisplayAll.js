import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/product', {
            Title,    
            Price,
            Description,      
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}
                    value={Title}
                    name="Title"
                />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}
                    value={Price}
                    name="Price"
                />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}
                    value={Description}
                    name="Description"
                />
            </p>
            <input className = "button" type="submit" value="Create"/>
        </form>
    )
}
export default ProductForm;

