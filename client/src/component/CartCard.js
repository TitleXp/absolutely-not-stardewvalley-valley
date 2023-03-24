import { useState } from "react"

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
    <div>CartCard

      product name:{product.name}
      <button onClick={handleDeleteProductInCart}>x</button>
      <br />
      price: {product.price}
      <br />
      quantity: {quantity}
      {showEditQtyForm ? 
      <button onClick={handleClickEdit}>edit</button> : 
      <>
        <button onClick={handleClickEdit}>cancel edit</button>
        <form onSubmit={handleEditQuantityInCart}>
          <input type="number" name="quantity" value={editQuantity.quantity} onChange={handleChangeEdit} />
          <input type="submit" value="update"/>
        </form>
      </>
      
      }
      
    
    </div>
  )
}

export default CartCard