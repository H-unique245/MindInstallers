import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card() {
    return (
        <>
        <Heading marginLeft={"24rem"} >Student Details</Heading>
      <Center py={6}>
         
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              "/milogo.jpeg"
            }
            objectFit={'cover'}
          />
        
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Student Name
              </Heading>
              <Text color={'gray.500'}>Email Address</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
              
                <Text fontSize={'sm'} color={'gray.500'}>
                 Roll
                </Text>
              </Stack>
              
            </Stack>
  
           
          </Box>
        </Box>
      </Center>
      </>
    );
  }