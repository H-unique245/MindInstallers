import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    Input,
    Box,
    useToast,
    Flex,
    FormLabel,
  } from '@chakra-ui/react'
import { useState } from 'react';

  
export default function UpdateTeacher( { id,email,name,changeMe } ) {

  const initialState = {
    email:email,
    name:name
} ;


  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val
    });
  };


 async function handleSubmit(e){
  
    e.preventDefault();
 

    toast({
      title: 'Updated Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
   
        let response= await fetch(`http://localhost:3000/api/signup/${id}`, {
          body: JSON.stringify(formstate),
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
         let data1=await response.json();
         console.log("patch",data1)
      
     
  
    onClose();
    setTimeout(()=>{
        changeMe()
    },1000)
 }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Update</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Update Student</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>

            <FormLabel color="red.300">Name</FormLabel>
            <Input mb="3"  type="text" placeholder='Name' borderBottom="2px solid orange" value={formstate.name} onChange={handleChange} name="name"/>
             
            <FormLabel color="red.300">Email</FormLabel>
            <Input mb="3"  placeholder='Email' borderBottom="2px solid orange" value={formstate.email} onChange={handleChange} type="text" name="email" />
    
            
              <Flex justifyContent="space-between">
                   <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="7"  color="white" placeholder='Submit form' />
                   <Button ml="2"  mt="7" colorScheme='red'  onClick={onClose}>Close</Button>
              </Flex>
            </FormControl>
      </form>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }
