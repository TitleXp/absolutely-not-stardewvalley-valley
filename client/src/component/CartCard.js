import { useState } from "react"
import { Button, Form } from 'semantic-ui-react';

const CartCard = ({id, quantity, product, setCart}) => {

  const [showEditQtyForm, setShowEditQtyForm] = useState(true)
  const [editQuantity, setEditQuantity] = useState({
    quantity: quantity
  })

  const handleClickEdit = () => {
    setShowEditQtyForm(currentValue => !currentValue)
  }

  const handleChangeEdit = (e) => {
    setEditQuantity({...editQuantity, [e.target.name]: e.target.value})
  }

  const handleDeleteProductInCart = () => {
    fetch(`/carts/${id}`, {
      method: "DELETE"
    })
    setCart(currentCart => currentCart.filter(element => element.id !== id))
  }

  const handleEditQuantityInCart = (e) => {
    e.preventDefault()
    fetch(`/carts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editQuantity)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      // setError message here
    })
    .then(data => {
      setCart(currentCart => currentCart.map(element => {
        if (element.id === id) {
          return { ...element, quantity: data.quantity}
        }
        return element
      }))
      setShowEditQtyForm(true)
    })
    .catch(error => alert(error))
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{product.name}</div>
        <div className="description">
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Quantity: {quantity}</p>
          <img src={product.pic_link} />
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Button basic color="red" onClick={handleDeleteProductInCart}>
            Remove
          </Button>
          {showEditQtyForm ? (
            <Button basic color="green" onClick={handleClickEdit}>
              Cancel
            </Button>
          ) : (
            <Button basic color="green" onClick={handleClickEdit}>
              Edit
            </Button>
          )}
        </div>
        {showEditQtyForm && (
          <Form onSubmit={handleEditQuantityInCart}>
            <Form.Field>
              <input
                type="number"
                name="quantity"
                min="1"
                value={editQuantity.quantity}
                onChange={handleChangeEdit}
              />
            </Form.Field>
            <Button basic color="green" type="submit">
              Update
            </Button>
          </Form>
        )}
      </div>
    </div>
  )
}

export default CartCard