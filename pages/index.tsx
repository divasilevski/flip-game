import Head from "next/head";
import Menu from "../components/Menu";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>

      <Menu></Menu>
    </>
  );
}
