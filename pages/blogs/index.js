import { Box, VStack } from '@chakra-ui/react';
import React from 'react'
import BlogCard from '../../Component/Blog/BlogCard'
import CommentList from '../../Component/Blog/CommentList';

function Blogs({data}) {
    // console.log(data);
  return (
    <>
    <p>Hello</p>
    {
        data.map((el)=>
        <Box key={el.id}>
        <BlogCard title={el.title} desc={el.description} />
        <VStack alignItems={'left'} border={'1px solid red'}>
            <CommentList text={'good'} user={'teacher'}/>
            <CommentList text={'good'} user={'teacher'}/>
            <CommentList text={'good'} user={'teacher'}/>
            <CommentList text={'good'} user={'teacher'}/>
        </VStack>
        </Box>
        )
    }
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