import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Heading,
  Button,


} from "@chakra-ui/react";

import Link from 'next/link'
import {
  FiCompass,
  FiStar,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";




const LinkItems = [
  { name: "Assignments", icon: FiCompass, url: "/teacher" },
  { name: "Student List", icon: FiStar, url: "/teacher/teach" },
];

export default function Nav({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "none", lg: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 0, lg: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"  >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {/* <Image src={Logo} /> */}
        </Text>
        <CloseButton
          display={{ base: "flex", md: "flex", lg: "none" }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link, index) => (
        <NavItem url={link.url} key={index} icon={link.icon}> 
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, url }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
    >
      <Link href={`${url}`}>{children}</Link>
    </Flex>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 0, lg: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
    
      
      </Text>
      <Heading style={{margin:"auto"}}  >Teachers Dashboard</Heading>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Flex
          align="center"
          p="2"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.100",
            color: "black",
          }}
        >
          Home
        </Flex>
      </Link>
    

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Duser&psig=AOvVaw0cpuplRZEtGx8IGw7a1Bve&ust=1671308076412000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLDWu_L5_vsCFQAAAAAdAAAAABAE"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="xs" color="gray.600">
                  Teacher
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <Link href="/" style={{ textDecoration: "none" }}>
                Students List
                </Link>
              </MenuItem>
              <MenuItem>
             
                <Link href="/" style={{ textDecoration: "none" }}>
                Assignments
                </Link>
            
              </MenuItem>

              <MenuDivider />
              <MenuItem>
                <Link href="/" style={{ textDecoration: "none" }}>
                  Sign Out
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};