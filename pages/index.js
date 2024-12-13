import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: ALBERATUNG"
        description="Welcome to ALBERATUNG homepage."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      />
      <Head>
        <title>ALBERATUNG</title>
        <link rel="icon" href="/images/logo.jpg?v=3" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
