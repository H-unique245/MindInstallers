import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  SimpleGrid,
  Container,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function SocialProfileSimple() {
  const router = useRouter();
  const handleRoute = () => {
    router.push("https://pravin0428.github.io/");
  };

  const founders = [
    {
      bgImg:
        "https://discover-georgiasouthern-edu.cdn.technolutions.net/www/images/banner-photo.jpg",
      avatar: "portfolio_img.jpeg",
      name: "Pravin Mohite",
      Email: "mohite@gmail.com",
      story:
        "Founder of this web application",
      connect: "https://pravin0428.github.io/",
    },
    {
      bgImg:
        "https://discover-georgiasouthern-edu.cdn.technolutions.net/www/images/banner-photo.jpg",
      avatar: "portfolio_img.jpeg",
      name: "Hemant Ahire",
      Email: "hemant@gmail.com",
      story:
        "Founder of this web application",
      connect: "https://pravin0428.github.io/",
    },
    {
      bgImg:
        "https://discover-georgiasouthern-edu.cdn.technolutions.net/www/images/banner-photo.jpg",
      avatar: "portfolio_img.jpeg",
      name: "Kedar Pathak",
      Email: "kedar@gmail.com",
      story:
        "Founder of this web application",
      connect: "https://pravin0428.github.io/",
    },
    {
      bgImg:
        "https://discover-georgiasouthern-edu.cdn.technolutions.net/www/images/banner-photo.jpg",
      avatar: "portfolio_img.jpeg",
      name: "Bishal Sharma",
      Email: "bishal@gmail.com",
      story:
        "Founder of this web application",
      connect: "https://pravin0428.github.io/",
    },
  ];

  return (
    <>
      <Container maxW={"7xl"} py={7} as={Stack} spacing={12} mt="-25px" 
    //    border="2px solid red"
      >
        <Stack spacing={0} align={"center"}>
          <Heading>Founders</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
      </Container>
      <Center 
    //   py={6}
    //    border="2px solid yellow"
       >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          spacing={4}
        >
          {founders.map((elem, index) => (
            <Box
              //  border="2px solid"
              key={index}
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              
              textAlign={"center"}
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                margin="auto"
                mb={4}
                pos={"relative"}
                src={elem.avatar}
                alt="Dan Abramov"
                _hover={{ border: "1px solid black" }}
              />

              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {elem.name}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                {elem.Email}
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
              {elem.story} PM for work inquires
                or{" "}
                <Link href={elem.connect} color={"blue.400"}>
                  #connect
                </Link>{" "}
                me in your posts
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #Coding
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #Content creator
                </Badge>
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Message
                </Button>
                <Button
                  onClick={handleRoute}
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}
