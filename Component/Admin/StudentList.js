import React, { useEffect, useState } from "react";
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
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

const StudentAdminList = () => {
  const [ data, setData ] = useState([]);
  const [ toggle , setToggle] = useState(false);

  function changeMe(){
   setToggle(!toggle);
  }

  function stuDelete(id){
    axios.delete(`http://localhost:3000/api/signup/${id}`);
    setTimeout(()=>{
     setToggle(!toggle)
    },1000)
  }



  async function getStudents() {
    let studata = await axios.get("http://localhost:3000/api/student/info");
     setData(studata.data)
  }

  useEffect(() => {
    getStudents();
  }, [toggle]);

  return (
    <>
    <Box>
    <Flex justifyContent="end" mb="20">
          <AddStudent changeMe={changeMe} />
      </Flex>
      <TableContainer>
        <Table
          variant="simple"
          style={{ margin: "auto", margin: "10px 40px 40px 20px" }}
        >
          <Thead style={{ marginLeft: "20px" }}>
            <Tr>
              <Th color="teal" fontSize="18">Student EMAIL</Th>
              <Th color="teal" fontSize="18">Student Name</Th>
              <Th color="teal" fontSize="18">Class</Th>
              <Th color="teal" fontSize="18">Roll Number</Th>
              <Th color="teal" fontSize="18">Fees Paid</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data.map((item)=>(
                <Tr>
                <Td>{item.email}</Td>
                <Td>{item.name}</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>{item.verify?"Paid":"Not Paid"}</Td>
                {/* <Td> <Button colorScheme="telegram">View Details</Button> </Td> */}
                <Td> <Button colorScheme="red" onClick={()=> stuDelete(item._id) }> Delete</Button> </Td>
                <Td> <UpdateStudent id={item._id} paid={item.verify} changeMe={changeMe} email={item.email} name={item.name} /> </Td>
              </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      </Box>
    </>
  );
};

export default StudentAdminList;
