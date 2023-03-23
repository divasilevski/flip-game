import Head from "next/head";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>

      <div className="page center">
        <Menu></Menu>
      </div>
    </>
  );
}
