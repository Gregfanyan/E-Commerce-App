import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCar } from '../../redux'

function Car() {
  const counter = useSelector((state) => state.car.numOfCars)
  const dispatch = useDispatch()
  const style = {
    marginTop: '70px',
  }

  return (
    <div style={style}>
      <button onClick={() => dispatch(buyCar())}>Buy Car</button>
    </div>
  )
}

export default Car
