import React, { useEffect, useState } from "react";

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
import { isExpired, decodeToken } from "react-jwt";
import { useRouter } from "next/navigation";
import SpinnerLoading from "../../Component/Loading";

export default function SignIn() {
  const initialState = {
    email: "",
    password: "",
  };

  const [formstate, setFormstate] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (formstate.email == "" || formstate.password == "") {
      toast({
        title: `Enter all details`,
        position: "top",
        isClosable: true,
        status: "warning",
        duration: 1000,
      });
    } else {
      let result = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(formstate),
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      console.log(data);
      if (data.message == "User not found") {
        toast({
          title: "Wrong password",
          description: "You need to enter correct password.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        localStorage.setItem("token", data.token);
        toast({
          title: "Login Successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        setTimeout(() => {
          let token = localStorage.getItem("token");
          const myDecodedToken = decodeToken(token);
          if (myDecodedToken.role == "student") {
            router.push("/student");
          } else if (myDecodedToken.role == "teacher") {
            router.push("/teacher");
          } else if (myDecodedToken.role == "admin") {
            router.push("/admin/student");
          }
        }, 1000);
      }
      setFormstate(initialState);
    }
  }
  function loadingEffect() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  useEffect(() => {
    loadingEffect();
  }, []);

  return (
    <Box>
      {loading && <SpinnerLoading />}
      {!loading && (
        <Box w="50%" m="auto">
          <VStack spacing={10} align="stretch">
            <Heading textAlign="center" color="teal">
              Sign In
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
      )}
    </Box>
  );
}
