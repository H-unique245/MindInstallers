import { Box, Button, Flex, Input, Select, Text, Toast, useToast } from "@chakra-ui/react";
import React, { useState } from 'react'



const initialState = {
    name: "",
    email: "",
    date: "",
   subject: "",
    file: "",

  };

const Form = () => {

    const [formData, setFormData] = useState(initialState);

    const toast=useToast()
    function handleChange({ target }) {
      let val = target.value;
   
      
      setFormData({ ...formData, [target.name]: val });
    }
    function submit() {
    
     
  
    toast({
          title: 'Assignment  Submitted Successfully.',
          description: "Happy Learning & Best of Luck",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      
  }
  
return (
        <>
      
        <Text textAlign='center' fontSize='22px'>Submit your assignment here...</Text>
        <Flex border='2px solid #fc2779' width={{base : '95%', md : '90%', lg : '85%'}} m='auto' gap={{base : '5px', md :'20px' , lg : '40px'}} direction={{base : 'column', md: 'row'}} padding='20px' borderRadius='10px'>
        <Box  w={{base : '90%', md : '80%', lg : '50%'}} m='auto'>
            <Text>Topic of Assignment</Text>
            <Input placeholder="Assignment Topic"
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text" />

            <Text mt='10px'>Student E-mail</Text>
            <Input  type="text"
              placeholder="Student E-mail"
              name="email"
              onChange={handleChange}
              value={formData.email} />

            <Text mt='10px'>Date</Text>
            <Input   type="date"
            //   placeholder="Product price in Rs"
              name="date"
              onChange={handleChange}
              value={formData.date} />

         

           </Box>

           <Box w={{base : '90%', md : '80%', lg : '50%'}} m='auto' >
         

            <Text mt='10px'>Subject</Text>
           <Input  type="text"
              placeholder="Enter subject "
              name="subject"
              onChange={handleChange}
              value={formData.subject} />

            <Text mt='10px'>Submit File</Text>
          <Input    placeholder="Submit File"
          type="file"
          
              onChange={handleChange}
              value={formData.file}/>

            <br /> <br />
    
            <Button 
           
           onClick={() => submit()} colorScheme="teal" type="submit">ADD</Button>
            

<Button 
           marginLeft="20px"
           colorScheme="red"
           type="button"
           onClick={() => {
             setFormData(initialState);
           }}>RESET</Button>
        </Box>
        </Flex>

        
        </>
    )   
  
}

export default Form