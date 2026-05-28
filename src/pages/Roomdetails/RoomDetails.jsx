import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import useLanguage from '../../context/useLanguage';
import './RoomDetails.css';

// მხოლოდ სურათები რჩება აქ — ტექსტი translations-ში გადავიდა
const roomImages = {
  'standard-double': {
    mainImage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop'
    ]
  },
  'deluxe-king-suite': {
    mainImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop'
    ]
  },
  'family-apartment': {
    mainImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'
    ]
  }
};

// ფასები ცალკე (ენა-დამოუკიდებელი)
const roomPrices = {
  'standard-double':  '$120',
  'deluxe-king-suite': '$220',
  'family-apartment':  '$350'
};

export default function RoomDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  const images = roomImages[id];
  const [activeImage, setActiveImage] = useState(images?.mainImage);

  // ოთახის translated მონაცემები
  const roomData = t(`roomDetails.rooms.${id}`);

  if (!images || typeof roomData !== 'object') {
    return (
      <div className="room-not-found">
        <h2>{t('roomDetails.notFound')}</h2>
        <Link to="/rooms" className="back-link">← {t('roomDetails.backBtn')}</Link>
      </div>
    );
  }

  const title       = t(`roomDetails.rooms.${id}.title`);
  const description = t(`roomDetails.rooms.${id}.description`);
  const amenities   = t(`roomDetails.rooms.${id}.amenities`);
  const price       = roomPrices[id];

  return (
    <div className="room-detail-page">
      <Link to="/rooms" className="back-to-list-btn">
        <span>←</span> {t('roomDetails.backBtn')}
      </Link>

      <div className="room-detail-container">

        {/* მარცხენა: ფოტოები */}
        <div className="room-media-section">
          <div className="main-image-container">
            <img src={activeImage || images.mainImage} alt={title} className="main-display-img" />
          </div>
          <div className="gallery-thumbnails">
            <img
              src={images.mainImage}
              alt="thumbnail main"
              className={`thumb-img ${(activeImage === images.mainImage || !activeImage) ? 'selected' : ''}`}
              onClick={() => setActiveImage(images.mainImage)}
            />
            {images.gallery.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`thumbnail ${index}`}
                className={`thumb-img ${activeImage === imgUrl ? 'selected' : ''}`}
                onClick={() => setActiveImage(imgUrl)}
              />
            ))}
          </div>
        </div>

        {/* მარჯვენა: ტექსტი */}
        <div className="room-content-section">
          <h1 className="room-detail-title">{title}</h1>
          <div className="room-detail-price">
            {price}<span> {t('roomDetails.perNight')}</span>
          </div>

          <p className="room-detail-description">{description}</p>

          <hr className="divider" />

          <div className="amenities-section">
            <h3>{t('roomDetails.amenitiesTitle')}</h3>
            <ul className="amenities-grid">
              {Array.isArray(amenities) && amenities.map((amenity, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-card">
            <h4>{t('roomDetails.bookingTitle')}</h4>
            <p>{t('roomDetails.bookingSubtitle')}</p>
            <button
              className="book-now-btn"
              onClick={() => alert('Booking system integration coming soon!')}
            >
              {t('roomDetails.bookBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}