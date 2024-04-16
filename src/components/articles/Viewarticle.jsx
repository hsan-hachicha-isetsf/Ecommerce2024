import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewarticle = () => {
  const [article,setArticle]=useState({})
const {id} =useParams()

useEffect(()=>{
loadarticle()

},[])
  const loadarticle=async()=>{
    try {
     const res= await axios.get(`http://localhost:3001/api/articles/${id}`)
     setArticle(res.data)
     console.log(res.data)
    } catch (error) {
      
    }
   

  }
  return (
    <div>
      Afficher un article
    </div>
  )
}

export default Viewarticle
