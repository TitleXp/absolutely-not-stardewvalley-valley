import { useState, useEffect } from 'react' 
// import { useHistory } from 'react-router-dom'
import FarmCard from './FarmCard'

const FarmsContainer = () => {

  // const history = useHistory()
  const  [farms, setfarms] = useState([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const resp = await fetch("/farms")
        const data = await resp.json()
        setfarms(data)
      } catch(error) {
        alert(error)
      }
    } 
    fetchFarms()
  }, []);

  const mappedFarms = farms.map(farm => (
    <FarmCard {...farm} key={farm.id}  />
  ))

  return (
    <div>FarmsContainer
      <div>
        {mappedFarms}
      </div>
    </div>
  )
}

export default FarmsContainer