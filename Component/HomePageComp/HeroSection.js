import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

function HeroSection() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(banner-education-tree.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        // border="5px solid green"
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6} mr="auto">
          <Text
            fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
            fontWeight={700}
            lineHeight={1.2}
            textShadow="4px 7px 7px red"
            color="white"
          >
            MindInstallers learning Hub
          </Text>
          <Text
            color={"white"}
            lineHeight={1.2}
            fontSize={{ base: "20px", md: "30px", lg: "35px" }}
            textShadow="7px 8px 8px white"
          >
            Be the creator of your success
          </Text>
          <ln />
          <Stack direction={"row"}>
            <Link href="/about" >
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
            </Link>

             
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default HeroSection;
