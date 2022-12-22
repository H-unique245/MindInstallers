import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";
  // import React from "react";
  const initStudent={
      email:"",
      password:""
  }
  function ForgotTeacher({ isFormOpen, setIsFormOpen }) {
      const [student,setStudent]= useState(initStudent)
      const toast = useToast();
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const onClose = () => {
      setIsFormOpen(false);
    };
  const handleChange=(e)=>{
    const {name, value}= e.target;
    
    setStudent({...student, [name]:value})
  }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(student.email==="" || student.password==="" ){
      //    alert("Enter All Details Please!!");
      
         toast({
          title: "Enter All Details Please!!",
          status: "warning",
          position: 'top',
          duration: 1000,
          isClosable: true,
        });
      }
      else{
        //   console.log(student)
          axios({
              method: "POST",
              url: `http://localhost:3000/api/teacher/update`,
              data: student,
            }).then((res)=>{ 
              if(res.status===201){
            toast({
              title: res.data,
              status: "success",
              position:'top',
              duration: 1000,
              isClosable: true,
            });
            setIsFormOpen(false);
          //   console.log(res.data)
          }
          else{
              console.log(res);
              toast({
                  title: res.data,
                  status: "error",
                  position:'top',
                  duration: 1000,
                  isClosable: true,
                });
          }
          })
      }
    }
    return (
      <>
        <Modal isOpen={isFormOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                  Enter new password
                </Heading></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                  <form>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    placeholder="your-email@example.com"
                    _placeholder={{ color: "gray.500" }}
                    type="email" name='email' value={student.email} onChange={(e)=>handleChange(e)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name='password' value={student.password} onChange={(e)=>handleChange(e)} />
                </FormControl>
                <Stack spacing={6}>
                  <Button
                  type="submt"
                  onClick={(e)=>handleSubmit(e)}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
                  </form>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default ForgotTeacher;
  
  function VerticallyCenter() {}
  