import Link from "next/link";
import { useContext, useEffect } from "react";
import { StatContext } from "../context/stat/statContext";

export default function Statistic() {

  const statistic = useContext(StatContext)
  useEffect(() => {
    statistic.fetch()
  }, [])

  return (
    <div>
      <h1>Statistic page</h1>
      <Link href="/">Назад</Link>
      <pre>{JSON.stringify(statistic.state)}</pre>
    </div>
  )
}
