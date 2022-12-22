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
    SimpleGrid
  } from '@chakra-ui/react';

 const studentStory = [
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity",
    },
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity"
    },
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity"
    },
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity"
    },
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity"
    },
    {
        bgImg : "https://th.bing.com/th/id/OIP.4yqvrozRcVdWk9oafSbSqAHaE7?pid=ImgDet&rs=1",
        avatar : "https://th.bing.com/th/id/OIP.aLaFHq6n2NB8EFAoDwHpVAHaE7?pid=ImgDet&w=1024&h=682&rs=1",
        name : "name",
        standerd : "10th",
        story : "People who build their own home tend to be very courageous. These people are curious about life. They're thinking about what it means to live in a house, rather than just buying a commodity"
    }
 ]
  
  export default function SocialProfileWithImage() {
    return (
        
      <Center py={6}  
    //   border="4px solid orange"  
       >
         <SimpleGrid 
         columns={{ base: 1, md: 2 , lg : 3 , xl: 3 , '2xl' : 5  }} spacing={20}> 
         {studentStory.map((elem)=>(
           <Box 
            // border="3px solid yellow" 
           _hover={{ boxShadow: " hsl(34, 94%, 50%) 0px -23px 25px 0px inset, hsl(34, 94%, 50%) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}
        
           width="320px"
           bg={useColorModeValue('white', 'gray.800')}
           boxShadow={'2xl'}
           rounded={'md'}
           overflow={'hidden'}>
           <Image
             h={'120px'}
             w={'full'}
             src={elem.bgImg}
             objectFit={'cover'}
           />
           <Flex justify={'center'} mt={-12}>
             <Avatar
               size={'2xl'}
               src={
                 elem.avatar
               }
               alt={'Author'}
               css={{
                 border: '2px solid white',
               }}
             />
           </Flex>
   
           <Box p={6}>
             <Stack spacing={0} align={'center'} mb={5}>
               <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                 {elem.name}
               </Heading>
               <Text color={'gray.500'}>{elem.standerd}</Text>
             </Stack>
   
             <Stack direction={'row'} justify={'center'} spacing={6}>
               <Stack spacing={0} align={'center'}>
               <Text fontWeight={600}>{elem.story}</Text>
               </Stack>
             </Stack>
   
             <Button
               w={'full'}
               mt={8}
               bg={useColorModeValue('#151f21', 'gray.900')}
               color={'white'}
               rounded={'md'}
               _hover={{
                 transform: 'translateY(-2px)',
                 boxShadow: 'lg',
               }}>
               Follow
             </Button>
           </Box>
         </Box>
         ))}
        
        </SimpleGrid>
      </Center>
    );
  }