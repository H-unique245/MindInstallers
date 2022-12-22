import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { useRouter } from "next/navigation";



export default function Navbar() {
  const router = useRouter();

  function homePage(){
    router.push("/")
  }
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="gray.400" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
             {/* <Image w="10%" src="" />   */}
             <Button ml="10" colorScheme="teal" onClick={homePage}>Go to HomePage</Button></Flex>
         
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
             

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src="https://raw.githubusercontent.com/nilamkhose2001/obsolete-battle-2339-fithub-/main/src/Media/avatar.webp"
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src="https://raw.githubusercontent.com/nilamkhose2001/obsolete-battle-2339-fithub-/main/src/Media/avatar.webp"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>admin</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}