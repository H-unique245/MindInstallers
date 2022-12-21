import React, { useState } from 'react';

import { Box, Button,  Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import axios from "axios"

export default function SignUp(){
  const initialState = {
    name : "",
    email : "",
    password :"",
  } ;

  const [formstate, setFormstate] = useState(initialState);
  const [show, setShow] = useState(false);
 
  
  const handleClickPassword = () => setShow(!show)

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val
    });
  };

  function postData(){
    console.log(formstate);

    alert("Sign Up Successfully");
    axios({
        method: "POST",
        url: `http://localhost:3000/api/signup`,
        data: formstate,
     
      })
    
  }

  return (
  <Box w="50%" m="auto">
    <VStack
      spacing={10}
      align='stretch'
    >
    <Heading textAlign="center" color="teal">Join</Heading>
    <hr />
    <Stack direction={['column', 'column', 'row']} spacing="120px">
      <Box w={["100%","90%","50%"]} m="auto" textAlign="center">
        <VStack
          spacing={5}
          align='stretch'>
            
              <Input type="text" placeholder='Name' borderBottom="2px solid orange" value={formstate.name}
                    onChange={handleChange}
                    name="name"/>
             
              <Input type="text" placeholder='Email Address' borderBottom="2px solid orange" value={formstate.email}
                    onChange={handleChange}
                    name="email"/>
        
              <InputGroup size='md'>
                  <Input borderBottom="2px solid orange" value={formstate.password} onChange={handleChange}
                    name="password"
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClickPassword}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
              </InputGroup>
            
        </VStack>
      </Box>
      
      </Stack>
    
    <Box m="auto" textAlign="center">
          <Button w="35%" colorScheme='twitter' onClick={postData}> Join </Button>
    </Box>

    </VStack>
  </Box>
  )
}
