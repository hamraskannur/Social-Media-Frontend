import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { ProtectRoute } from "../components/User/Routes/UserProtectRouter";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Locomate</title>
      </Head>
      <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
