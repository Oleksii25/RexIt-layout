import { ADD_ORDER, REMOVE_ORDER } from './counterTypes.js'

export const addOrder = (payload) => ({
  type: ADD_ORDER,
  payload,
})

export const removeOrder = (payload) => ({
  type: REMOVE_ORDER,
  payload,
})
