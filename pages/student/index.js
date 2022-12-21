import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Forgot from "./forgot";

function Student() {
  const [isForgot, setIsForgot] = useState(false);

  const handleForgot = () => {
      setIsForgot(true);
      console.log(isForgot,"helo")
  };
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        p={2}
        bg="gray.700"
        color="white"
      >
        <Heading> Student DashBoard</Heading>
        <Button variant={"outline"} onClick={handleForgot}>
          Change Password
        </Button>
        {isForgot && (
          <Forgot isFormOpen={isForgot} setIsFormOpen={setIsForgot} />
        )}
      </Stack>
      <Stack direction={"row"} p="2rem">
        <VStack
          h="full"
          w="20%"
          alignItems="left"
          textAlign={"left"}
          border={"1px solid"}
          p={3}
        >
          <Heading as="h3">Student Details</Heading>
          <Text>Name: Hemant Aher</Text>
          <Text>Class: Xth</Text>
          <Text>Email: a.hemant96@gmail.com</Text>
          <Text>Age: 25</Text>
        </VStack>
        <VStack w="80%" border={"1px solid"}>
          <Heading as="h3">Details</Heading>
          <Box as="p" justifyContent={"right"}>
            Attendane: 100%{" "}
          </Box>
        </VStack>
      </Stack>
    </>
  );
}

export default Student;
