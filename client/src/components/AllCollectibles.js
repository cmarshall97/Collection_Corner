import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import AllCollectiblesCSS from './AllCollectibles.module.css'

const AllCollectibles = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/allcollectibles')
        .then((res)=> {
            console.log(res)
            setList(res.data.result)
        }).catch((err)=> {
            console.log("There is an error grabbing all the collectibles: ", err)
        })
    },[])

    return (
        <div className ={AllCollectiblesCSS.body}>
            <h1>All Collectibles</h1>
            {
                list.map((collectible)=>(
                    <div className ={AllCollectiblesCSS.listItem}>
                        <div>
                            <img className ={AllCollectiblesCSS.image} src={collectible.link}/>
                        </div>
                        <div>
                            <Link to={`/collectible/${collectible._id}`}>{collectible.itemName}</Link>
                            <p>{collectible.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default AllCollectibles;