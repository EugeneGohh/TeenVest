import React, { ReactElement } from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin } from "react-icons/io5";
import Typist from "react-typist";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => (
  <Stack direction="row" align="center">
    <Flex
      w={8}
      h={8}
      align="center"
      justify="center"
      rounded="full"
      bg={iconBg}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{text}</Text>
  </Stack>
);

export default function Features() {
  return (
    <Container maxW="5xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="blue.400"
            fontWeight={600}
            fontSize="sm"
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf="flex-start"
            rounded="md"
          >
            What we provide?
          </Text>
          <Typist>
            <Heading>
              Democratizing <span /> Financial Education Across Malaysia
            </Heading>
          </Typist>

          <Text color="gray.500" fontSize="lg">
            Malaysia has a low percentage of financial literacy. <br />
            It's time to make a difference.
          </Text>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color="yellow.500" w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text="Financial markets"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Financial literacy for all"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}