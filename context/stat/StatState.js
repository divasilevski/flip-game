import axios from 'axios'
import { useReducer } from "react"
import { StatContext } from "./statContext"
import { statReducer } from "./statReducer"

export const StatState = ({ children, URL }) => {
  const [state, dispatch] = useReducer(statReducer, [])

  const fetch = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DB_URL}/stat.json`)
      const payload = Object.values(response.data)
      dispatch({ type: 'FETCH_STAT', payload })
    } catch (e) {
      console.error(e)
      dispatch({ type: 'FETCH_STAT', payload: [] })
    }
  }

  const create = async (name, time) => {
    try {
      const payload = { name, time }
      await axios.post(`${process.env.NEXT_PUBLIC_DB_URL}/stat.json`, payload)
      dispatch({ type: 'ADD_STAT', payload })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StatContext.Provider value={{ state, fetch, create }}>
      {children}
    </StatContext.Provider>
  )
}