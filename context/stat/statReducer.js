const handlers = {
  FETCH_STAT: (_, { payload }) => payload,
  ADD_STAT: (state, { payload }) => [...state, payload],
  DEFAULT: state => state
}

export const statReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}