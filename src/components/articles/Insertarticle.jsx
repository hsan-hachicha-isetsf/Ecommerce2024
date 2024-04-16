import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Insertarticle = () => {
const[reference,setReference]=useState("")
const[designation,setDesignation]=useState("")
const[marque,setMarque]=useState("")
const[prix,setPrix]=useState(0)
const[qtestock,setQtestock]=useState(0)
const[imageart,setImageart]=useState("")
const[scategorieID,setScategorieID]=useState("")
const[scategories,setScategories]=useState([])
const navigate=useNavigate()
//méthode pour récupérer la liste des sous catégories
const getscategorie=async()=>{
 try {
  const res=await axios.get("http://localhost:3001/api/scategories")
  setScategories(res.data)
 } catch (error) {
  console.log(error)
 }
}
useEffect(()=>{
getscategorie()
},[])
const handlesubmit=async(e)=>{
  e.preventDefault()
  const article={
    reference:reference,
    designation:designation,
    marque:marque,
    prix:prix,
    qtestock:qtestock,
    imageart:imageart,
    scategorieID:scategorieID
  }
try {
  await axios.post("http://localhost:3001/api/articles",article)
  .then(res=>{
    navigate("/listart")
  })
} catch (error) {
  console.log(error)
}
}
const handlenavigate=()=>{
  navigate("/listart")
}
  return (
    <div className='container'>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
      <Form>
      <Row className="mb-2">
      <Form.Group as={Col} md="6" >
       
        <Form.Control 
        required
        type="text" 
        placeholder="Référence"
        value={reference}
        onChange={(e)=>setReference(e.target.value)}
         />
      </Form.Group>
      <Form.Group as={Col} md="6" >
        
        <Form.Control 
        required
        type='text'
        value={designation}
        placeholder='Désignation'
        onChange={(e)=>setDesignation(e.target.value)}
        />
      </Form.Group>
      </Row>
      <Row className="mb-2">
      <Form.Group as={Col} md="6" >
       
        <Form.Control 
        required
        type="text" 
        placeholder="Marque"
        value={marque}
        onChange={(e)=>setMarque(e.target.value)}
         />
      </Form.Group>
      <Form.Group as={Col} md="6" >
        
        <Form.Control 
        required
        type='number'
        value={prix}
        placeholder='Prix'
        onChange={(e)=>setPrix(e.target.value)}
        />
      </Form.Group>
      </Row>

      <Row className="mb-2">
      <Form.Group as={Col} md="6" >
       
        <Form.Control 
        required
        type="number" 
        placeholder="Quantité Stock"
        value={qtestock}
        onChange={(e)=>setQtestock(e.target.value)}
         />
      </Form.Group>
      <Form.Group as={Col} md="6" >
      <Form.Select 
      value={scategorieID}
      onChange={(e)=>setScategorieID(e.target.value)}
      >
        <option>Sélectionner Scatégorie</option>
        {scategories.map((scat,index)=>
      <option value={scat._id}>{scat.nomscategorie}</option>
        )}
    </Form.Select>
        
      </Form.Group>
      </Row>

      <Row className="mb-2">
      <Form.Group  >
       
        <Form.Control 
        required
        type="text" 
        placeholder="Image"
        value={imageart}
        onChange={(e)=>setImageart(e.target.value)}
         />
      </Form.Group>
      
      </Row>
      <Row className="mb-2">
        <div className='text-center p-1' >
       
      <Button as={Col} md="3" onClick={(e)=>handlesubmit(e)} variant="outline-success btn-sm">Enregistrer</Button>
     
      <Button as={Col} md="3" onClick={()=>handlenavigate()} variant="outline-warning btn-sm">Annuler</Button>
      </div>
      
      </Row>
    </Form>
    </div>
    </div>
  )
}

export default Insertarticle
