import { Link } from 'react-router-dom';
import './Rooms.css';

const roomsData = [
  {
    id: 'standard-double',
    title: 'Standard Double Room',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
    features: ['2 Guests', '1 Bed', 'Free Wi-Fi', 'Balcony']
  },
  {
    id: 'deluxe-king-suite', // შევასწორეთ ID, რომ დაემთხვეს RoomDetail-ს
    title: 'Deluxe King Suite',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    features: ['3 Guests', '1 King Bed', 'Mountain View', 'Mini Bar']
  },
  {
    id: 'family-apartment',
    title: 'Family Residence Apartment',
    price: '$350',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    features: ['5 Guests', '2 Bedrooms', 'Kitchen', 'Terrace']
  }
];

export default function Rooms() {
  return (
    <div className='rooms-page'>
      <div className='rooms-header'>
        <h2>Our Accommodation</h2>
        <p>Discover a space designed for your ultimate comfort and relaxation</p>
      </div>

      <div className='rooms-grid'>
        {roomsData.map((room) => (
          /* მთლიანი ქარდი ახლა არის ლინკი */
          <Link to={`/rooms/${room.id}`} key={room.id} className='room-card'>
            <div className='room-image-wrapper'>
              <img src={room.image} alt={room.title} className='room-image' />
              <div className='room-price-badge'>{room.price}<span> / night</span></div>
            </div>
            
            <div className='room-info'>
              <h3>{room.title}</h3>
              
              <ul className='room-features'>
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}