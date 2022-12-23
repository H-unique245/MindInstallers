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
  SimpleGrid,
} from "@chakra-ui/react";

const studentStory = [
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://assets.thehansindia.com/h-upload/2020/03/13/953803-school-girl.jpg",
    name: "K Manasa",
    standerd: "10th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://th.bing.com/th/id/OIP.B4QRpizfwU9JuK_iU5s0MwAAAA?pid=ImgDet&rs=1",
    name: "Abhinav mehta",
    standerd: "10th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://wub.edu.bd/assets/images/alumni/36444409_1889079891389826_7118594163506937856_n.jpg",
    name: "Harshal vende",
    standerd: "12th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://th.bing.com/th/id/R.13935539075605b7c3c7d902270a0e1d?rik=R73QzwvVfPkKLQ&riu=http%3a%2f%2fwww.ssvmghodabazarpuri.in%2fUp_Files%2fTopperStudents%2f26_07_2021_000421_Abhishek+kar.jpg&ehk=nLgN4jUmS1hMwVbMs6LNUB5sHhxMnzcC5%2f2haP98TPs%3d&risl=&pid=ImgRaw&r=0",
    name: "rahul verma",
    standerd: "10th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://th.bing.com/th/id/R.40b3b0c66b8913eafd6d54656ef0addb?rik=n2HOxEBBDfTmDw&riu=http%3a%2f%2fhcsnehrunagar.com%2fimages%2fRiya+Bhargava.jpg&ehk=f%2f9TRiK8A%2btFlac3UBGwfO%2fEEa%2fPbkhQVDju2FksSqA%3d&risl=&pid=ImgRaw&r=0",
    name: "Rohini Yadav",
    standerd: "10th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
  {
    bgImg:
      "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
    avatar:
      "https://th.bing.com/th/id/OIP.PbYvi2rWXlZ_oyIodc2WxwHaKX?pid=ImgDet&w=920&h=1288&rs=1",
    name: "Raman munda",
    standerd: "12th",
    story:
      "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
  },
];

export default function OurStudents() {
  return (
    <Center
      py={6}
      //   border="4px solid orange"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 3, "2xl": 5 }}
        spacing={20}
      >
        {studentStory.map((elem) => (
          <Box
            // border="3px solid yellow"
            _hover={{
              boxShadow:
                " hsl(34, 94%, 50%) 0px -23px 25px 0px inset, hsl(34, 94%, 50%) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            }}
            width="320px"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={elem.bgImg}
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"2xl"}
                src={elem.avatar}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {elem.name}
                </Heading>
                <Text color={"gray.500"}>{elem.standerd}</Text>
              </Stack>

              <Stack direction={"row"} justify={"center"} spacing={6}>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>{elem.story}</Text>
                </Stack>
              </Stack>

              {/* <Button
                w={"full"}
                mt={8}
                bg={useColorModeValue("#151f21", "gray.900")}
                color={"white"}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Follow
              </Button> */}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
}
