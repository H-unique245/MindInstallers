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
} from "@chakra-ui/react";
import { useState } from "react";
// import React from "react";
const initStudent={
    email:"",
    password:""
}
function Forgot({ isFormOpen, setIsFormOpen }) {
    const [student,setStudent]= useState(initStudent)
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const onClose = () => {
    setIsFormOpen(false);
  };
const handleChange=(e)=>{
  const {name, value}= e.target;
  
  setStudent({...student, [name]:value})
}

  const handleSubmit=()=>{
    console.log(student)
    console.log("check");
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
                onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
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

export default Forgot;

function VerticallyCenter() {}
