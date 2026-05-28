import { useState } from 'react';
import './Gallery.css';

const galleryData = [
  { id: 1, category: 'building', title: 'Main Building', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop' },
  { id: 2, category: 'pool', title: 'Infinity Pool', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop' },
  { id: 3, category: 'jacuzzi', title: 'Spa Jacuzzi', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop' },
  { id: 4, category: 'vineyards', title: 'Our Vineyards', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop' },
  { id: 5, category: 'sports', title: 'Sports Courts', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop' },
  { id: 6, category: 'restaurant', title: 'Traditional Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop' },
  { id: 9, category: 'terrace', title: 'Sunset Terrace Lounge', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop' }
];

const categories = [
  { code: 'all', name: 'All' },
  { code: 'building', name: 'building' },
  { code: 'pool', name: 'pool' },
  { code: 'jacuzzi', name: 'jacuzzi' },
  { code: 'vineyards', name: 'vineyards' },
  { code: 'sports', name: 'sports' },
  { code: 'restaurant', name: 'restaurant' },
  { code: 'terrace', name: 'terrace' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  // 🔥 სთეითი გახსნილი ფოტოს შესანახად
  const [selectedImg, setSelectedImg] = useState(null); 

  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  return (
    <div className='gallery-page'>
      <div className='gallery-header'>
        <h2>Resort Gallery</h2>
        <p>Take a visual tour through the luxury and nature of Telavally Residence</p>
      </div>

      <div className='gallery-filters'>
        {categories.map((cat) => (
          <button
            key={cat.code}
            className={`filter-btn ${activeFilter === cat.code ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.code)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className='gallery-grid'>
        {filteredImages.map((item) => (
          /* 🔥 onClick-ის დამატება ქარდზე */
          <div key={item.id} className='gallery-card' onClick={() => setSelectedImg(item.image)}>
            <div className='gallery-img-wrapper'>
              <img src={item.image} alt={item.title} />
              <div className='gallery-overlay'>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 სრული ზომით გახსნილი ფოტოს მოდალი (Lightbox) */}
      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImg} alt="Enlarged view" className="modal-content" />
        </div>
      )}
    </div>
  );
}