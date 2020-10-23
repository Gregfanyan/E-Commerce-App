import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

const SingleCountry = () => {
  const { id } = useParams<any>()

  let history = useHistory()

  function handleClick() {
    if (!history) {
      return <div>No country</div>
    } else {
      history.push('/')
    }
  }

  const products = useSelector((state: any) =>
    state.products.products.find((product: any) => product._id === id)
  )

  console.log('products', products)

  if (!products) {
    return <div>No product</div>
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
      <div>{products.name}</div>
    </div>
  )
}
export default SingleCountry
