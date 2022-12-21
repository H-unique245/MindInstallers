import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex , Card, CardHeader, CardBody, CardFooter , Image , Heading , Button} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

 const data =[
    {
        src : "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        title : "Become a Teacher",
        dis : "Teach what you love. Coursector gives you the tools to create a course",
        role : "Start Teaching"
    
     },
     {
        src : "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        title : "Become a students",
        dis : "Teach what you love. Coursector gives you the tools to create a course",
        role : "Start Learning"
        
     }
 ]  

  function Profesion() {
  return (
    <Box p={4} border="2px solid yellow" >
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} 
      //  border={{ base:"8px solid yellow",   md: '3px solid teal'   }}
          >
            {
                data.map((elem , i) =>(
                    <Card 
                    // border="5px solid red" 
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width="100%"
                    key={i}
                    
                  >
                    <Image
                     margin="auto"
                      objectFit='cover'
                      borderRadius="50%"
                      mt="-1px"
                      maxW={{ base: '80%', sm: '30%' ,  md: '30%' }}
                      maxH={{ base: '90%', sm: '100%' , md: '100%'  }}
                      src={elem.src}
                      alt='Caffe Latte'
                    //   border={{ base:"8px solid yellow",   md: '3px solid teal'   }}
                    />
                  
                    <Stack>
                      <CardBody>
                        <Heading size='md'>
                          {elem.title}  
                           
                          </Heading>
                  
                        <Text py='2'>
                         {elem.dis}
                        </Text>
                      </CardBody>
                  
                      <CardFooter>
                        <Button variant='solid' backgroundColor="#ff5722" color="white" border="1px solid white" _hover={{backgroundColor : "white" , color : "#ff5722" , border : "1px solid #ff5722"}} >
                          {elem.role}
                        </Button>
                      </CardFooter>
                    </Stack>
                  </Card>
                ))
            } 
     
</SimpleGrid>
    </Box>
  );
}

export default Profesion


/*
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
*/