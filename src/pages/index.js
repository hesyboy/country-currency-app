import Head from "next/head";
import { Inter } from "next/font/google";
import CountryCurrency from "@/components/CountryCurrency";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Country Currency App</title>
        <meta name="description" content="Country Currency App (Test)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <CountryCurrency />
      </Flex>
    </>
  );
}
