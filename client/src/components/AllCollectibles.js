import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const AllCollectibles = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/allcollectibles')
        .then((res)=> {
            console.log(res)
            setList(res.data.result)
        }).catch((err)=> {
            console.log("There is an error grabbing all the collectibles: "(err))
        })
    },[])

    return (
        <div>
            <h1>All Collectibles</h1>
            {
                list.map((collectible)=>(
                    <div>
                        <div className="col col-4 mt-3">
                            <img src={collectible.link}/>
                        </div>
                        <div>
                            <Link to={`/collectible/${collectible._id}`}>{collectible.itemName}</Link>
                            {/* <p>Owned by:{}</p> */}
                            <p>{collectible.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default AllCollectibles;