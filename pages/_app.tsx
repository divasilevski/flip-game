import React from "react";
import "styles.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="page center">
      <Component {...pageProps} />
    </main>
  );
}
