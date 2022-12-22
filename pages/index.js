import Navbar from "../Component/Navabar";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
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
      textShadow="4px 7px 7px red"
       fontSize="30px" color="white" fontWeight="bold" >What our students have to say</Text>
        <OurStudents/>
      </Box>
    </>
  );
}
