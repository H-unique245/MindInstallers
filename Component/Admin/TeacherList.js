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
  Box,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import AddTeacher from "./AddTeacher";
import UpdateTeacher from "./UpdateTeacher";

const TeacherList = () => {
  const [ data, setData ] = useState([]);
  const [toggle, setToggle] = useState(false);

  function changeMe(){
    setToggle(!toggle)
  }

  function teaDelete(id){
    axios.delete(`http://localhost:3000/api/signup/${id}`);
    setTimeout(()=>{
     setToggle(!toggle)
    },1000)
  }



  async function getStudents() {
    let studata = await axios.get("http://localhost:3000/api/teacher/info");
     setData(studata.data)
  }

  useEffect(() => {
    getStudents();
  }, [toggle]);

  return (
    <>
    <Box>
      <Flex justifyContent="end" mb="20">
              <AddTeacher changeMe={changeMe} />
      </Flex>
      <TableContainer>
        <Table
          variant="simple"
          style={{ margin: "auto", margin: "10px 40px 40px 20px" }}
        >
          <Thead style={{ marginLeft: "20px" }}>
            <Tr>
              <Th color="teal" fontSize="18">Teacher EMAIL</Th>
              <Th color="teal" fontSize="18">Teacher Name</Th>
              <Th color="teal" fontSize="18">Subject</Th>
              <Th color="teal" fontSize="18">Salary</Th>
              <Th color="teal" fontSize="18">Employee id</Th>
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
                <Td>-</Td>
                <Td> <Button colorScheme="red" onClick={()=> teaDelete(item._id) }> Delete</Button> </Td>
                {/* <Td> <Button colorScheme="telegram">View Details</Button> </Td> */}
                <Td> <UpdateTeacher id={item._id} changeMe={changeMe} email={item.email} name={item.name} /> </Td>
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

export default TeacherList;
