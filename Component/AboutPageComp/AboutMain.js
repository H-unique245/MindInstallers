import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import OurStudents from "../HomePageComp/OurStudents";
import Navbar from "../Navabar";
import Founders from "./Founders";

function AboutMain() {
  return (
    <>
    
      <Container maxW={"5xl"} 
    // border="2px solid green"
      >
        <Stack
        //   border="1px solid"
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: "100px" , md: "100px" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            What makes the Institute unique?{" "}
            <Text as={"span"} color={"white"}>
              About Us
            </Text>
          </Heading>
          <Box boxShadow='md' p='6' rounded='md' bg='white' >
          <Text color={"black"} maxW={"6xl"} fontSize="xl" mt="-10px"
        //    border="1px solid red"
           >
            The Institute is committed to high-quality, affordable health care
            for all. We strive for excellence at each of our 29 practices, while
            accepting all patients regardless of their ability to pay. We offer
            primary care, mental health, dental care, social work and many other
            services to patients of all ages. As a federally-qualified community
            health center (FQHC) network, we meet national standards for
            affordable, accessible, comprehensive health care services. We also
            participate in the federal medical professional liability program
            known as the Federal Tort Claims Act (FTCA). We are accredited by
            the Joint Commission and recognized by the National Committee for
            Quality Assurance as a patient-centered medical home. In addition to
            operating health centers, we use our expertise and resources to
            address racial and ethnic disparities in health, advance the use of
            health information technology, and find innovative ways to improve
            care for diabetes, depression, women’s health, HIV and other
            priorities in the communities we serve. We also train health
            students and professionals at all levels. The Institute is committed
            to improving the health care system, particularly for individuals
            and communities who historically have had limited access to care. We
            engage in research to improve health care services, and participate
            in policy development at the local, state and national levels.
            Interested in getting to know us better? Read our recent news,
            review our job opportunities or find a health center for yourself or
            your family.
          </Text>
          </Box>
          
        </Stack>
      </Container>
      <Founders />
    </>
  );
}

export default AboutMain;
