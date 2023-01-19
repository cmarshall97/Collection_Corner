import React, {useState} from 'react';
import axios from 'axios';

const AddAndSeeCollectibles = () => {

    //putting all of our variables in to state so they can be 
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault()
        //where to send the data
        axios.post('http://localhost:8000/collectible/new',{
            itemName,
            category,
            link,
            description
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log("There was a problem addng a new item:" (err));
        })
        }

    return(
        <div className ="col-6 mx-auto">
            
            <form onSubmit={submitHandler}>
                <div>
                    <label className = "form-label" value={itemName} >Item Name: </label>
                    <input type="text" className= "form-control" onChange={(e)=>setItemName(e.target.value)} />
                </div>
                <div>
                    <label className = "form-label" value={category}>Category: </label>
                    <select className= "form-control" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="figurines">Figurines</option>
                        <option value="furniture">Furniture</option>
                        <option value="paintings">Paintings</option>
                    </select>
                </div>
                <div>
                    <label className = "form-label" value={link}>Link to photo: </label>
                    <input type="text" className= "form-control" onChange={(e)=>setLink(e.target.value)}/>
                </div>
                <div>
                    <label className = "form-label" value={description}>Description: </label>
                    <input type="text-area" className= "form-control" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button type="submit">Add to My Collection</button>
            </form>
        </div>
    )
}

export default AddAndSeeCollectibles;