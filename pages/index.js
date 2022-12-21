
import Navbar from '../Component/Navabar'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import HeroSection from '../Component/HomePageComp/HeroSection'
import { Box } from '@chakra-ui/react'
import Profesion from '../Component/HomePageComp/Profesion'
 


export default function Home() {
  return (
       <>
       <Navbar />
       <Box>
       <HeroSection />
        <Profesion/>
       {/* <Box border="2px solid yellow" width="80%" margin="auto" marginTop="-100px" backgroundColor="white" >
       </Box> */}
       </Box>

       </>
  )
}
