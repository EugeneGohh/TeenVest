import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    // Auth0 provider
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}
