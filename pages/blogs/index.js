import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react'
import BlogCard from '../../Component/Blog/BlogCard'
import CommentList from '../../Component/Blog/CommentList';
import Navbar from '../../Component/Navabar';
import Comment from '../comment';

function Blogs({data}) {
    // console.log(data);
  return (
    <>
    <Navbar />
    <Heading textAlign={'center'}>Blogs </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
    {
        data.map((el)=>
        <Box key={el.id}>
        <BlogCard title={el.title} desc={el.description} />
        <VStack alignItems={'left'} border={'1px solid black'}>
           <Comment />
        </VStack>
        </Box>
        )
    }

    </SimpleGrid>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/blogs`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }