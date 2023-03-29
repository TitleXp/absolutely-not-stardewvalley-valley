import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const FarmCard = ({ id, name, location, farm_pic_link, farmer }) => {

  // console.log('this is farmer', farmer)

  return (
    <Card>
      <Image src={farm_pic_link} wrapped ui={false} />
      <Card.Content>
        <Card.Header as={Link} to={`/farms/${id}`}>
          {name} Farm
        </Card.Header>
        <Card.Meta>
          <span className='location'>{location}</span>
        </Card.Meta>
        <Card.Description>Farmer: {farmer.name}</Card.Description>
        <img src={farmer.sprite_link} width={50} />
      </Card.Content>
    </Card>
  )
}

export default FarmCard