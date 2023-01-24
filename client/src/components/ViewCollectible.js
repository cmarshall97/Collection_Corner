import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import ViewCollectibleCSS from './ViewCollectible.module.css'

const ViewCollectible = () => {
    const {id} = useParams()
    const navigate= useNavigate()

    const [collectible,setCollectible] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/collectible/${id}`)
        .then((res)=>{
            console.log(res.data.result)
            setCollectible(res.data.result)
        }).catch((err) =>{
            console.log("There was a problem grabbing this information", err)
        })
    },[])


    //delete allows us to delete items only if they are oned by the user in session
    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/${id}/delete`)
        .then((res)=>{
            console.log("Deleted successfully")
            navigate("/allcollectibles")
        }).catch((err) =>{
            console.log("There was a problem deleting your item:"(err))
        })
    }

    return (
        <div>
            <div className ={ViewCollectibleCSS.container}>
                <h1>{collectible.itemName}</h1>
                <img className ={ViewCollectibleCSS.image} src={collectible.link}/>
                <h3>{collectible.category}</h3>
                <p>{collectible.description}</p>
            </div>
            <div className ={ViewCollectibleCSS.buttons}>
                <Link to={`/edit/collectible/${collectible._id}`} ><button className ={ViewCollectibleCSS.editbtn}>Edit</button></Link>
                <button className ={ViewCollectibleCSS.deletebtn} onClick={(e)=>deleteHandler(collectible._id)}>Delete</button>
            </div>
        </div>
        )
    }

export default ViewCollectible;