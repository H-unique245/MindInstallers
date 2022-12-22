import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Admin(){
  return (
    <Box>
          <Flex justifyContent="space-evenly" mt="100">
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Students : </Text>
          <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}>20</Text></Flex>
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Teachers : </Text> <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}> 200</Text> </Flex>
        <Flex boxShadow= "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" borderRadius="10" w="25%" bg='teal.400' height='180' justifyContent="center" alignItems="center">  <Text fontWeight="600" color="white" fontSize="22" fontFamily="sans-serif"  _hover={{ cursor:"pointer"}}>Total Revenue : </Text> <Text fontWeight="600" color="red" fontSize="25" fontFamily="sans-serif"  _hover={{color:"red", cursor:"pointer", fontSize:"30"}}>$ 7,150</Text> </Flex>
    </Flex>
    </Box>
  )
}
