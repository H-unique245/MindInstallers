import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react';
import { Spinner } from '@chakra-ui/react'

const SpinnerLoading = () => {
  return (
    <Flex ml="550" mt="20">
        <Spinner
            thickness='8px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
        <Heading ml="4" color="blue.500">....Going to login page</Heading>
    </Flex>

  )
}
export default SpinnerLoading ;