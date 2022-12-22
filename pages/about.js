import { Box ,Input,useColorModeValue} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import AboutMain from '../Component/AboutPageComp/AboutMain'
import Navbar from '../Component/Navabar'


// const initialState = {
//     massage : "",
//     name : "",
//     email : ""
// }

function about() {

    // const [review , setReview] = useState(initialState)
    //  console.log(review)
     
    //  const  handleChange = (e) => {
      
    //    const {name , value} = e.target
    //    setReview({...review , [name] : value})
    //  }

    //  const handleSubmit = async(e) => {
    //   e.preventDefault();
    //   //  try{
    //   //   await axios.post("http://localhost:3000/api/b_review/breview" , {
    //   //     review
    //   //    }).then((res) => {
    //   //     console.log(res)
    //   //    })
    //   //  }catch(e){
    //   //   console.log(e)
    //   //  }
    //   axios.post("http://localhost:3000/api/breview", review)
      
    //   .then((res) => console.log(res));
    //  }

  return (
    <>
    <Navbar />
       <Box 
       bgGradient='linear(to-r, green.200, pink.500)'
       pb="20px"
       pl="10px"
       pr="10px"
    // bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
    //bgGradient='linear(to-l, #7928CA, #FF0080)'
     // bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
    >
    <AboutMain/> 
    </Box>
     
     {/* <form onSubmit={handleSubmit} >
     <Input name="massage" value={review.massage} type="text"  placeholder="Add Comments" onChange={handleChange} />
     <Input name="name" value={review.name} type="text"  placeholder="Add Comments"  onChange={handleChange} />
     <Input name="email" value={review.email} type="text"  placeholder="Add Comments" onChange={handleChange} />
     <Input type="submit" />
     </form> */}
    

    </>
  
  )
}

export default about