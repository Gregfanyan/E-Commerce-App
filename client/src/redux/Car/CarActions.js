import { BUY_CAR } from './CarTypes'

export const buyCar = (number = 1) => {
  return {
    type: BUY_CAR,
    payload: number,
  }
}
