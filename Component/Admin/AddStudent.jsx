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
  } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';

  
function AddStudent({changeMe}) {

  const initialState = {
    name : "",
    email :"",
    role:"student"
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


 function handleSubmit(e){
  
    e.preventDefault();

    axios({
      method: "POST",
      url: `http://localhost:3000/api/signup`,
      data: formstate,
    });


    toast({
      title: 'Added Successfully',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    setTimeout(()=>{
      changeMe()
    },1000)
  
    onClose();
    
 }
   

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='telegram' mr="20">Add Student</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Add Student</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FormControl>
              <Input   type="text" placeholder='Name' borderBottom="2px solid orange" value={formstate.name} onChange={handleChange} name="name"/>
                  
              <Input mt="5"  placeholder='Email' borderBottom="2px solid orange" value={formstate.email} onChange={handleChange} type="text" name="email" />


              
              <Flex justifyContent="space-between">
                   <Input  type="submit" _hover={{cursor:"pointer"}}  bg="twitter.600" mt="10"  color="white" placeholder='Submit form' />
                   <Button ml="2"  mt="10" colorScheme='red' >Close</Button>
              </Flex>
            </FormControl>
      </form>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default AddStudent;