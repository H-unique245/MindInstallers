import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const data = [
  {
    src: "https://th.bing.com/th/id/OIP.tei9Vsc8styOGZ9nN0I3RAHaE8?pid=ImgDet&rs=1",
    title: "Become a Teacher",
    dis: "Teach what you love. Coursector gives you the tools to create a course",
    role: "Start Teaching",
  },
  {
    src: "https://th.bing.com/th/id/OIP.IipLLln2LLXdAR73__xzSwHaE8?pid=ImgDet&rs=1",
    title: "Become a students",
    dis: "Teach what you love. Coursector gives you the tools to create a course",
    role: "Start Learning",
  },
];

function Profesion() {

  const rourer = useRouter()

  const handleClick = () =>{
    rourer.push("/signup")
  }

  return (
    <Box p={4}  boxShadow='lg'  rounded='md' bg='white'>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        spacing={10}
        //  border={{ base:"8px solid yellow",   md: '3px solid teal'   }}
      >
        {data.map((elem, i) => (
          <Card
            // border="5px solid red"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            width="100%"
            key={i}
          >
            <Image
              //  margin="auto"
              objectFit="cover"
              //    borderRadius="60%"
              maxW={{ base: "100%", sm: "200px" }}
              //   maxW={{ base: '200px',   md: '200px' }}
              //   maxH={{ base: '800px', sm: '100%' , md: '1000px'  }}
              src={elem.src}
              alt="Caffe Latte"
              //   border={{ base:"8px solid yellow",   md: '3px solid teal'   }}
            />

            <Stack>
              <CardBody>
                <Heading size="lg" >{elem.title}</Heading>

                <Text
                  marginTop="25px"
                  //  border="1px solid red"
                  fontSize="20px"
                  py="2"
                  
                >
                  {elem.dis}
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                onClick={handleClick}
                  variant="solid"
                  backgroundColor="#ff5722"
                  color="white"
                  border="1px solid white"
                  _hover={{
                    backgroundColor: "white",
                    color: "#ff5722",
                    border: "1px solid #ff5722",
                  }}
                >
                  {elem.role}
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Profesion;
