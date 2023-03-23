import Head from "next/head";
import Records from "components/Records";

export default function RecordsPage() {
  return (
    <>
      <Head>
        <title>Records</title>
      </Head>

      <Records />
    </>
  );
}
