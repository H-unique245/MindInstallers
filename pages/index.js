import Navbar from "../Component/Navabar";
import HeroSection from "../Component/HomePageComp/HeroSection";
import { Box , Text } from "@chakra-ui/react";
import Profesion from "../Component/HomePageComp/Profesion";
import OurStudents from "../Component/HomePageComp/OurStudents";

export default function Home() {
  return (
    <>
      <Box backgroundColor="grey"   >
        <Navbar />
        <HeroSection />
        <Box   width="95%" margin="auto" marginTop="-100px" backgroundColor="grey" >
        <Profesion />
       </Box>
       <br />
       <Text 
      //  ml="70px" 
      
      textAlign="center"
      textShadow="4px 7px 7px black"
       fontSize="30px" color="white" fontWeight="bold" >What our students have to say</Text>
        <OurStudents/>
      </Box>
    </>
  );
}
