import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Listarticles = () => {
  const[articles,setArticles]=useState([])
useEffect(()=>{
  loadarticles()
},[])
  const loadarticles=async()=>{
    try {
                                 
      const res=await axios.get("http://localhost:3001/api/articles")
      setArticles(res.data)
    //console.log(res.data)

    } catch (error) {
      console.log(error)
    }
  }
const handleDelete=async(id)=>{
     try {   
      if(window.confirm("Supprimer article ")){          
    await axios.delete(`http://localhost:3001/api/articles/${id}`)
    loadarticles()
      }
    
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='container'>

<div > 
  <nav className="navbar navbar-expand-lg navbar-dark bg-success"> 
<div className="container-fluid"> 
<Link className="btn btn-outline-light" to="/insertart"> Ajouter article </Link> </div> </nav> 

</div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Marque</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { articles.map((art,index)=>
        <tr key={index}>
     
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.marque}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td>
          <Link className='btn btn-outline-info btn-sm' 
          
          to={`/viewart/${art._id}`}>
            <i class="fa-regular fa-eye"></i>

          </Link>
          &nbsp;
          
          <td>
<Link
className="btn btn-outline-primary mx-2"
to={`/editarticle/${art._id}`}>
<i class="fa-solid fa-pen-to-square"></i>


</Link>
</td>

          <Button variant="danger" onClick={()=>handleDelete(art._id)}>
          <i class="fa-solid fa-trash"></i>
             </Button>

          </td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

export default Listarticles
