/* eslint-disable @next/next/no-html-link-for-pages */
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Typist from "react-typist";

export default function Hero() {
  return (
    <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Learn Once
            </Text>
            <br />
            <Text color="blue.400" as="span">
              Teach Everyone
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color="gray.500">
            Develop your financial literacy here with hands-on experience. A
            place where you can explore financial markets with virtual money.
            It's time to upskill yourself!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
            >
              <a href="/api/auth/login">
                <Typist>Get started</Typist>
              </a>
            </Button>

            <Button rounded="full">
              <Typist>Learn more</Typist>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </Flex>
    </Stack>
  );
}
