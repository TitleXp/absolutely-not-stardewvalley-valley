import React from 'react'
import { Link } from 'react-router-dom'

const FarmCard = ({ id, name, location, farm_pic_link}) => {
  return (
    <div>
      <Link to={`/farms/${id}`}>{name}</Link>
      <div>
        <img src={farm_pic_link}></img>
        <p>Location: {location}</p>
      </div>
    </div>
  )
}

export default FarmCard