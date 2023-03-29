import { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import FarmCard from './FarmCard';

const FarmsContainer = () => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const resp = await fetch('/farms');
        const data = await resp.json();
        setFarms(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchFarms();
  }, []);

  const mappedFarms = farms.map(farm => <FarmCard {...farm} key={farm.id} />);

  console.log('these are farms', farms)
  
  return (
    <Container style={{ marginTop: '10em' }}>
      {/* logo */}
      <img src="https://i.imgur.com/rHEZqK5.png" width={700}  />
      <h2>Farms</h2>
      <Card.Group>{mappedFarms}</Card.Group>
    </Container>
  );
};

export default FarmsContainer;