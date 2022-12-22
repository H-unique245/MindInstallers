
import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from '@chakra-ui/react'
import axios from 'axios';

const StudentList = () => {
  const [data, setData ] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/student/info`)
    .then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <>
      <TableContainer>
        <Heading marginLeft={"20rem"} color={"orange"}>Students List</Heading>
  <Table variant='simple'>
    
    <Thead>
      <Tr  >
        <Th>Student Name</Th>
        <Th>Student E-mail</Th>
        <Th>Role</Th>
       
        </Tr>
    </Thead>
    {data.map((item) => {
          return (
    <Tbody  key={item.id} >
      <Tr>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td >{item.role}</Td>
      

        

      </Tr>
    
     </Tbody>
    );
  })}
  </Table>
</TableContainer>
    
    </>
  )
}

export default StudentList


