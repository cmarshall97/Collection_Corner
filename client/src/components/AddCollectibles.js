import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AddCollectibleCSS from './AddCollectible.module.css'

const AddCollectibles = () => {

    //putting all of our variables in to state so they can be 
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({}); //storing the errors here so hat we can render them on the screen

    const navigate= useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        //where to send the data
        axios.post('http://localhost:8000/collectible/new',{
            itemName,
            category,
            link,
            description
        }).then((res)=>{
            console.log("From backend",res);
            navigate('/allcollectibles')
        }).catch((err)=>{
            console.log("There was a problem adding a new item:", err);
            setErrors(err.response.data.errors)
        })
        }

    return(
        <div className ={AddCollectibleCSS.body}>
            <h2>Find something new??</h2>
            <form  onSubmit={submitHandler}>
                <div className ={AddCollectibleCSS.form}>
                    <label className = "form-label" >Item Name: </label>
                    <input type="text" className= "form-control" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
                    {errors.itemName ? <span className="text-danger">{errors.itemName.message}</span>: null}
                </div>
                <div className ={AddCollectibleCSS.form}>
                    <label className = "form-label" >Category: </label>
                    <input type="text" className= "form-control" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                    {errors.category ? <span className="text-danger">{errors.category.message}</span>: null}
                </div>
                <div className ={AddCollectibleCSS.form}>
                    <label className = "form-label" >Link to photo: </label>
                    <input type="text" className= "form-control" value={link} onChange={(e)=>setLink(e.target.value)}/>
                    {errors.link ? <span className="text-danger">{errors.link.message}</span>: null}
                </div>
                <div className ={AddCollectibleCSS.form}>
                    <label className = "form-label">Description: </label>
                    <input type="text-area" className= "form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    {errors.description ? <span className="text-danger">{errors.description.message}</span>: null}
                </div>
                <button className={AddCollectibleCSS.btn} type="submit">Add to My Collection</button>
            </form>
        </div>
    )
}

export default AddCollectibles;