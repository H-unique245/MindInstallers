import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
  } from '@chakra-ui/react'



const TeacherAss = () => {
  return (
    <>
    <heading>TeacherAss</heading>

    <TableContainer>

  <Table variant='simple' style={{margin:"auto",margin: "10px 40px 40px 20px"}} >
  
    <Thead style={{marginLeft:"20px"}} >
      <Tr>
        <Th>Student ID</Th>
        <Th>Student Name</Th>
        <Th>Assignment status</Th>
        <Th>Assignment Submission Link</Th>
       </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td isNumeric>id</Td>
        <Td>name:-</Td>
        <Td>Status</Td>
        <Td>Link:-</Td>

      </Tr>
      {/* <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
    
  </Table>
</TableContainer>
    
    </>
  )
}

export default TeacherAss