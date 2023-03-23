import Head from "next/head";
import Link from "next/link";

export default function Records() {
  return (
    <>
      <Head>
        <title>Records</title>
      </Head>

      <div className="page center">
        <h1>Records page</h1>
        <Link href="/">Назад</Link>
        <pre></pre>
      </div>
    </>
  );
}
