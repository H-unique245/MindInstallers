import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

export default function SignIn(){
  const initialState = {
    email: "",
    password: "",
  };

  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();


  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
   

    toast({
      title: "Login Successfully",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

    axios({
      method: "POST",
      url: `http://localhost:3000/api/login`,
      data: formstate,
    }).then((res)=> console.log(res))
    
    axios.post("http://localhost:3000/api/login", formstate).then((res)=> console.log(res));

  }

  return (
    <Box w="50%" m="auto">
      <VStack spacing={10} align="stretch">
        <Heading textAlign="center" color="teal">
          Join
        </Heading>
        <hr />

        <Box textAlign="center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl>
              <Input
                w={["100%", "90%", "80%", "60%"]}
                type="text"
                placeholder="Email"
                borderBottom="2px solid orange"
                value={formstate.email}
                onChange={handleChange}
                name="email"
              />

              <Input
                mt="5"
                w={["100%", "90%", "80%", "60%"]}
                placeholder="Password"
                borderBottom="2px solid orange"
                value={formstate.password}
                onChange={handleChange}
                type="password"
                name="password"
              />

            

              <Input
                type="submit"
                _hover={{ cursor: "pointer" }}
                bg="twitter.600"
                mt="10"
                w="70%"
                color="white"
                placeholder="Submit form"
              />
            </FormControl>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};
