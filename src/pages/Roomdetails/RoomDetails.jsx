import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './RoomDetails.css';

// მონაცემთა ბაზის იმიტაცია (უნდა ემთხვეოდეს Rooms.jsx-ის ID-ებს)
const allRoomsData = {
  'standard-double': {
    title: 'Standard Double Room',
    price: '$120',
    description: 'Our Standard Double Room offers a perfect blend of comfort and functionality. Ideal for couples or solo travelers, it features a plush double bed, a private balcony with city views, and all modern amenities required for a relaxing stay.',
    mainImage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop'
    ],
    amenities: ['Free High-Speed Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Private Balcony', 'Minibar', 'Hairdryer']
  },
  'deluxe-king-suite': { // თუ წინა გვერდზე "deluxe-suite" გეწერა, აქაც იგივე სახელი დაარქვი
    title: 'Deluxe King Suite',
    price: '$220',
    description: 'Experience pure luxury in our Deluxe King Suite. Offering breathtaking mountain views, a spacious living area, and an extra-large King bed, this suite is designed for those looking for an elevated boutique hotel experience.',
    mainImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop'
    ],
    amenities: ['Mountain View', 'King Size Bed', 'Espresso Machine', 'Smart TV with Netflix', 'Premium Toiletries', 'In-room Safe']
  },
  'family-apartment': {
    title: 'Family Residence Apartment',
    price: '$350',
    description: 'Perfect for families or groups, this grand residence features two separate bedrooms, a fully equipped modern kitchen, and a private expansive terrace. Enjoy the feeling of a luxury home combined with top-tier hotel service.',
    mainImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'
    ],
    amenities: ['2 Bedrooms', 'Fully Equipped Kitchen', 'Large Private Terrace', 'Washing Machine', 'Dining Area', 'Welcome Wine']
  }
};

export default function RoomDetail() {
  const { id } = useParams(); // კითხულობს ID-ს ბრაუზერის მისამართიდან
  const room = allRoomsData[id]; // პოულობს შესაბამის ოთახს მასივში
  
  // დიდი ფოტოს შეცვლისთვის (გალერეაში კლიკისას)
  const [activeImage, setActiveImage] = useState(room?.mainImage);

  // თუ ასეთი ოთახი არ არსებობს (არასწორი URL-ის შემთხვევაში)
  if (!room) {
    return (
      <div className="room-not-found">
        <h2>Room Not Found</h2>
        <Link to="/rooms" className="back-link">← Back to Rooms</Link>
      </div>
    );
  }

  return (
    <div className="room-detail-page">
      {/* უკან დაბრუნების ღილაკი */}
      <Link to="/rooms" className="back-to-list-btn">
        <span>←</span> Back to Accommodation
      </Link>

      <div className="room-detail-container">
        
        {/* მარცხენა მხარე: მედია / ფოტოები */}
        <div className="room-media-section">
          <div className="main-image-container">
            <img src={activeImage || room.mainImage} alt={room.title} className="main-display-img" />
          </div>
          <div className="gallery-thumbnails">
            {/* მთავარი ფოტოც ჩავსვათ პატარებში */}
            <img 
              src={room.mainImage} 
              alt="thumbnail main" 
              className={`thumb-img ${(activeImage === room.mainImage || !activeImage) ? 'selected' : ''}`}
              onClick={() => setActiveImage(room.mainImage)}
            />
            {room.gallery.map((imgUrl, index) => (
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

        {/* მარჯვენა მხარე: ტექსტური ინფორმაცია */}
        <div className="room-content-section">
          <h1 className="room-detail-title">{room.title}</h1>
          <div className="room-detail-price">{room.price}<span> / night</span></div>
          
          <p className="room-detail-description">{room.description}</p>
          
          <hr className="divider" />

          {/* კომფორტები */}
          <div className="amenities-section">
            <h3>Room Amenities</h3>
            <ul className="amenities-grid">
              {room.amenities.map((amenity, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* დაჯავშნის ბლოკი */}
          <div className="booking-card">
            <h4>Ready to Book Your Stay?</h4>
            <p>Experience luxury and hospitality at Telavally Residence.</p>
            <button className="book-now-btn" onClick={() => alert('Booking system integration coming soon!')}>
              Book This Room Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}