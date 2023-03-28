import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const FarmCard = ({ id, name, location, farm_pic_link }) => {
  return (
    <Card>
      <Image src={farm_pic_link} wrapped ui={false} />
      <Card.Content>
        <Card.Header as={Link} to={`/farms/${id}`}>
          {name}
        </Card.Header>
        <Card.Meta>
          <span className='location'>{location}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default FarmCard