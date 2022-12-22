import React, { useState } from "react";

import {
  Box,
  Button,
  useToast,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignUp() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    role: "",
  };

  const [formstate, setFormstate] = useState(initialState);
  const [show, setShow] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleClickPassword = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  function postData() {
    console.log(formstate);

    if (
      formstate.email == "" ||
      formstate.password == "" ||
      formstate.role == "" ||
      formstate.name == ""
    ) {
      toast({
        title: `Enter all details`,
        position: "top",
        isClosable: true,
        status: "warning",
        duration: 1000,
      });
    } else {
      axios({
        method: "POST",
        url: `http://localhost:3000/api/signup`,
        data: formstate,
      });
      toast({
        title: "Account created Successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setFormstate(initialState);
      router.push("/login");
    }
   
  }

  return (
    <Box w="50%" m="auto">
      <VStack spacing={10} align="stretch">
        <Heading textAlign="center" color="teal">
          Sign Up
        </Heading>
        <hr />
        <Stack direction={["column", "column", "row"]} spacing="120px">
          <Box w={["100%", "90%", "50%"]} m="auto" textAlign="center">
            <VStack spacing={10} align="stretch">
              <Input
                type="text"
                placeholder="Name"
                borderBottom="2px solid orange"
                value={formstate.name}
                onChange={handleChange}
                name="name"
              />

              <Input
                type="text"
                placeholder="Email Address"
                borderBottom="2px solid orange"
                value={formstate.email}
                onChange={handleChange}
                name="email"
              />

              <Select
                placeholder="Select type"
                name="role"
                value={formstate.role}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </Select>

              <InputGroup size="md">
                <Input
                  borderBottom="2px solid orange"
                  value={formstate.password}
                  onChange={handleChange}
                  name="password"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickPassword}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </VStack>
          </Box>
        </Stack>

        <Box m="auto" textAlign="center">
          <Button w="35%" colorScheme="twitter" onClick={postData}>
            {" "}
            Join{" "}
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
