import { StatState } from "../context/stat/StatState";
import "../styles.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <StatState>
      <Component {...pageProps} />
    </StatState>
  )
}
