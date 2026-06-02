import { useParams } from 'react-router-dom';

function HouseDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Item Details Page</h2>
      <p>You are viewing item ID: <strong>{id}</strong></p>
    </div>
  );
}

export default HouseDetails;
