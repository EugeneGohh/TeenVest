import { chakra, Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Testimonial() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={10}
      px={5}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <chakra.p
        fontSize={{ base: "3xl", sm: "4xl" }}
        lineHeight="8"
        fontWeight="extrabold"
        letterSpacing="tight"
        color={useColorModeValue("gray.900", "grey.400")}
      >
        Testimonial
      </chakra.p>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        Built for financial literacy. It's time to teach what schools don't
        teach.
      </Text>
      <Box textAlign={"center"}>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          }
          alt={"Eugene Goh"}
          mb={2}
        />

        <Text fontWeight={600}>Eugene Goh</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Software Engineer
        </Text>
      </Box>
    </Stack>
  );
}
