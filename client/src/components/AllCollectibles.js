import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const AllCollectibles = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/')
        .then((res)=> {
            console.log(res)
            setList(res.data.result)
        }).catch((err)=> {
            console.log(err)
        })
    },[])

    return (
        <div>
            
        </div>
        
    )
}
export default AllCollectibles