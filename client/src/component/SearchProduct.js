import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const SearchProduct = ({searchProduct, setSearchProduct}) => {

    const handleChange = (e) => {
        setSearchProduct(e.target.value)
    }

  return (
    <Form>
    <Form.Field>
      <Input
        icon='search'
        iconPosition='left'
        placeholder='Search Products'
        value={searchProduct}
        onChange={handleChange}
      />
    </Form.Field>
  </Form>
  )
}

export default SearchProduct