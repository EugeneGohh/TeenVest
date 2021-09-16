import React from "react";
import {
  chakra,
  Box,
  GridItem,
  useColorModeValue,
  Button,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
// import { signIn, useSession } from "next-auth/client";
// import { useRouter } from "next/router";

export default function Signin() {
  // const [session, loading] = useSession();
  // const router = useRouter();

  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            color={useColorModeValue("gray.900", "gray.200")}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Ready to start your journey?
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde
            quae exercitationem deleniti eaque minima quas iusto expedita natus,
            possimus quis accusantium? Omnis minus voluptas magnam libero unde,
            voluptate dolorum.
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <Flex px={6} py={4}>
              <Button py={2} w="full" colorScheme="blue">
                Continue with GitHub
              </Button>
            </Flex>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <chakra.a color="brand.500">Terms of Service</chakra.a>
          </chakra.p>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
