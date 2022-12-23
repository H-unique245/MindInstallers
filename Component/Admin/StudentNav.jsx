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
import Footer from "../Footer";




const LinkItems = [
  { name: "Student List", icon: FiCompass, url: "/admin/student" },
  { name: "Teacher List", icon: FiStar, url: "/admin/teacher" },
];

export default function StudentNav({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
    <Box ml={60}>
        <Footer />
      </Box>
    </>
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
          <Image src={'/mi.jpeg'} w='90px' alt="logo" />
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
      <Heading style={{margin:"auto"}}  >Student Details</Heading>
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box>
            {" "}
            <Button>HOME</Button>{" "}
          </Box>
        </Link>
        <Link href="/blogs" style={{ textDecoration: "none" }}>
          <Box marginLeft={"20px"}>
            {" "}
            <Button>BLOGS</Button>
          </Box>
        </Link>
      </Flex>

    

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
                    "https://lh3.googleusercontent.com/a/AEdFTp4-Wx2-dbRzYqAaqPwMJUns1MeWeUdlVPQY-qI=s360-p-rw-no"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="xs" color="gray.600">
                  Admin
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