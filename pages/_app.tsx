import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Auth provider
    <Provider session={pageProps}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
