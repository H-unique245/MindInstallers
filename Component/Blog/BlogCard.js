import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

function BlogCard({ title, desc }) {
  return (
    <>
      <Box w="100%" p={3}>
        <Box borderRadius="lg" overflow="hidden">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              transform="scale(1.0)"
              src={"https://picsum.photos/200/300"}
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Link>
        </Box>
        {/* <BlogTags tags={['Engineering', 'Product']} marginTop="3" /> */}
        <Heading fontSize="xl" marginTop="2">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            {title}
          </Link>
        </Heading>
        <Text as="p" fontSize="md" marginTop="2">
          {desc}
        </Text>
      </Box>
    </>
  );
}

export default BlogCard;
