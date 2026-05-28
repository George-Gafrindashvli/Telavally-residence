import { Link } from 'react-router-dom';
import useLanguage from '../../context/useLanguage';
import './Rooms.css';

// ოთახების სტატიკური მონაცემები (ტიტული და ფიჩერები translations-ში გადავიდა)
const roomsData = [
  {
    id: 'standard-double',
    titleKey: 'rooms.standardDouble.title',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
    featureKeys: ['rooms.features.guests2', 'rooms.features.oneBed', 'rooms.features.wifi', 'rooms.features.balcony']
  },
  {
    id: 'deluxe-king-suite',
    titleKey: 'rooms.deluxeKing.title',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    featureKeys: ['rooms.features.guests3', 'rooms.features.kingBed', 'rooms.features.mountainView', 'rooms.features.miniBar']
  },
  {
    id: 'family-apartment',
    titleKey: 'rooms.familyApartment.title',
    price: '$350',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
    featureKeys: ['rooms.features.guests5', 'rooms.features.twoBedrooms', 'rooms.features.kitchen', 'rooms.features.terrace']
  }
];

export default function Rooms() {
  const { t } = useLanguage();

  return (
    <div className='rooms-page'>
      <div className='rooms-header'>
        <h2>{t('rooms.pageTitle')}</h2>
        <p>{t('rooms.pageSubtitle')}</p>
      </div>

      <div className='rooms-grid'>
        {roomsData.map((room) => (
          <Link to={`/rooms/${room.id}`} key={room.id} className='room-card'>
            <div className='room-image-wrapper'>
              <img src={room.image} alt={t(room.titleKey)} className='room-image' />
              <div className='room-price-badge'>
                {room.price}<span> {t('rooms.perNight')}</span>
              </div>
            </div>
            <div className='room-info'>
              <h3>{t(room.titleKey)}</h3>
              <ul className='room-features'>
                {room.featureKeys.map((key, index) => (
                  <li key={index}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}