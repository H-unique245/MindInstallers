import {  HStack, Text } from '@chakra-ui/react'
import React from 'react'

function CommentList({text,user}) {
  return (
    <HStack spacing={20} >
      <Text>{text}</Text>
      <Text>-{user}</Text>
    </HStack>
  )
}

export default CommentList
