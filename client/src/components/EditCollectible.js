import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCollectible = () => {

    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const {id}= useParams()
    const navigate= useNavigate()

    //used to get the information from that specific collectible to display in the form
    useEffect(()=>{
        axios.get(`http://localhost:8000/collectible/${id}`)
        .then((res)=>{
            setItemName(res.data.result.itemName)
            setCategory(res.data.result.category)
            setLink(res.data.result.link)
            setDescription(res.data.result.description)
        }).catch((err)=>{
            console.log("There was a problem displaying the info:"(err))
        })
    },[id])

    //passing data as an object
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/edit/collectible/${id}`,{
            itemName,
            category,
            link,
            description
        }).then((res)=>{
            navigate(`/collectible/${id}`)
        }).catch((err)=>{
            console.log("There was a problem updating this item"(err))
        })
    }

    return(
        <div className ="col-6 mx-auto">
            
            <form onSubmit ={submitHandler}>
                <div>
                    <label className = "form-label" >Item Name: </label>
                    <input type="text" className= "form-control" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
                </div>
                <div>
                    <label className = "form-label">Category: </label>
                    <input type="text" className= "form-control" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                </div>
                <div>
                    <label className = "form-label">Link to photo: </label>
                    <input type="text" className= "form-control" value={link} onChange={(e)=>setLink(e.target.value)}/>
                </div>
                <div>
                    <label className = "form-label">Description: </label>
                    <input type="text-area" className= "form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditCollectible;