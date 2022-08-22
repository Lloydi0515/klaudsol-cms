import React, { useReducer } from "react";
import Head from "next/head";
import RootContext from "@/components/contexts/RootContext";
import { rootReducer } from "@/components/reducers/rootReducer";

import "@/styles/coreui/style.scss";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import "@/styles/timetracking/style.scss";

import "@/styles/surveyform/style.scss";
import "@/styles/certificateGenerator/style.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

export default function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(rootReducer, {});
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          SME - Accounting, inventory, procurement, and payroll system
          specifically tailored for Philippine small and medium-scale
          businesses. Helping Pinoy small and medium-sized businesses achieve
          more.
        </title>
      </Head>
      <RootContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </RootContext.Provider>
    </React.StrictMode>
  );
}
