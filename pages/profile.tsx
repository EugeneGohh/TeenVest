import React, { FC } from "react";
import {
  Box,
  Stack,
  HStack,
  Flex,
  Avatar,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Spinner,
  Code,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import DividerComponent from "../components/core/Divider";
import DrawerComponent from "../components/core/Drawer";

const Profile: FC<{
  folders?: any[];
  activeFolder?: any;
  activeDoc?: any;
  activeDocs?: any[];
}> = ({ folders, activeDoc, activeFolder, activeDocs }) => {
  const { user, error, isLoading } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { name, picture }: any = user;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Box bg="gray.100" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>TeenVest</Box>
            <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
              <Link href="/course">Courses</Link>
              <Link href="/market">Financial Markets</Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" src={picture} />
              </MenuButton>
              <MenuList>
                <a href="/api/auth/logout">
                  <MenuItem>Sign Out</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Link href="/course">Courses</Link>
              <Link href="/market">Financial Markets</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        Welcome back <Code>{name}</Code>!
      </Box>

      <DividerComponent />
      <DrawerComponent />

      {/* <Tabs>
        <DocumentPanel doc={activeDoc} />
      </Tabs> */}
    </div>
  );
};

/** Todos: Must handle all different page states.
 *  1. Folders -> none selected /profile
 *  2. Folders -> Folder selected /profile/id
 *  3. Folders -> Folder selected -> Document selected  /app/id/id
 */

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Spinner size="xl" />,
  onError: (error) => <Code>{error.message}</Code>,
});
