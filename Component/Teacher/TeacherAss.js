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
    TableContainer,
    Box,
    Heading,
    color
  } from '@chakra-ui/react'

import data from "./TeacherAssData.json"
import Link from 'next/link'
import {BsLink45Deg} from "react-icons/Bs"
const TeacherAss = () => {
  // const {data1,setData}=useState([])
  // console.log(data)

  return (
    <>
    <Heading marginLeft={"10rem"} color={"orange"} >Student Assignment Dashboard</Heading>

    <TableContainer>

  <Table variant='simple' style={{margin:"auto",margin: "10px 40px 40px 20px"}} >
  
    <Thead style={{marginLeft:"20px"}} >
      <Tr>
        <Th>Student ID</Th>
        <Th>Student Name</Th>
        <Th>Assignment status</Th>
      
       </Tr>
    </Thead>
    {data.map((item) => {
          return (
    <Tbody  key={item.id} >
      <Tr>
        <Td>{item.id}</Td>
        <Td>{item.name}</Td>
        <Td >{item.status===true?"Completed":"Pending"}</Td>
      

        

      </Tr>
    
     </Tbody>
    );
  })}
  </Table>
</TableContainer>
    
    </>
  )
}

export default TeacherAss