import { Link } from 'react-router-dom';
import useLanguage from '../../context/useLanguage';
import './Rooms.css';
import firstphoto from "../../assets/houses/firstHouse/second.jpeg"
import secondphoto from "../../assets/houses/secondHouse/fourth.jpeg"
import thirdphoto from "../../assets/houses/third/second.jpeg"

// ოთახების სტატიკური მონაცემები (ტიტული და ფიჩერები translations-ში გადავიდა)
const roomsData = [
  {
    id: 'standard-double',
    titleKey: 'rooms.standardDouble.title',
    price: '₾250',
    image: firstphoto,
    featureKeys: ['rooms.features.guests2', 'rooms.features.oneBed', 'rooms.features.wifi', 'rooms.features.balcony']
  },
  {
    id: 'deluxe-king-suite',
    titleKey: 'rooms.standardDouble.title',
    price: '₾250',
    image: secondphoto,
    featureKeys: ['rooms.features.guests2', 'rooms.features.oneBed', 'rooms.features.wifi', 'rooms.features.balcony']
  },
  {
    id: 'family-apartment',
    titleKey: 'rooms.standardDouble.title',
    price: '₾250',
    image: thirdphoto,
    featureKeys: ['rooms.features.guests2', 'rooms.features.oneBed', 'rooms.features.wifi', 'rooms.features.balcony']
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