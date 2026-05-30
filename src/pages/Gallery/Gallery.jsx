import { useState } from 'react';
import useLanguage from '../../context/useLanguage';
import './Gallery.css';

// Building images
import building1 from '../../assets/gallaryPhotos/buildingimg1.png';
import building2 from '../../assets/gallaryPhotos/buildingimg2.png';
import building3 from '../../assets/gallaryPhotos/buildingimg3.png';
import building4 from '../../assets/gallaryPhotos/buildingimg4.png';
// Pool images
import pool2 from '../../assets/gallaryPhotos/poolimg2.png';
import poolmg1 from '../../assets/gallaryPhotos/poolmg1.png';
import poolandbuilding from '../../assets/gallaryPhotos/poolandbuildingimg.png';
// Jacuzzi
import jacuzzi1 from '../../assets/gallaryPhotos/jacuzziimg1.png';
// Vineyards
import vineyards1 from '../../assets/gallaryPhotos/vineyardsimg1.png';
import vineyards2 from '../../assets/gallaryPhotos/vineyardsimg2.png';
import vineyards3 from '../../assets/gallaryPhotos/vineyardsimg3.png';
// Sports
import sports1 from '../../assets/gallaryPhotos/sportsimg1.png';
import sports2 from '../../assets/gallaryPhotos/sportsimg2.png';
// Restaurant
import restaurantImg from '../../assets/gallaryPhotos/restaurant.png';
// Terrace
import terrace1 from '../../assets/gallaryPhotos/terrace1.png';
// Sauna
import sauna1 from '../../assets/gallaryPhotos/Saunaimg1.png';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryData = [
    { id: 1, category: 'building', titleKey: 'gallery.items.mainBuilding',     image: building1 },
    { id: 2, category: 'building', titleKey: 'gallery.items.mainBuilding',     image: building2 },
    { id: 3, category: 'building', titleKey: 'gallery.items.mainBuilding',     image: building3 },
    { id: 4, category: 'building', titleKey: 'gallery.items.mainBuilding',     image: building4 },
    { id: 5, category: 'pool',     titleKey: 'gallery.items.infinityPool',     image: pool2 },
    { id: 6, category: 'pool',     titleKey: 'gallery.items.infinityPool',     image: poolmg1 },
    { id: 7, category: 'pool',     titleKey: 'gallery.items.infinityPool',     image: poolandbuilding },
    { id: 8, category: 'jacuzzi',  titleKey: 'gallery.items.spaJacuzzi',       image: jacuzzi1 },
    { id: 9, category: 'vineyards',titleKey: 'gallery.items.ourVineyards',     image: vineyards1 },
    { id: 10, category: 'vineyards',titleKey: 'gallery.items.ourVineyards',    image: vineyards2 },
    { id: 11, category: 'vineyards',titleKey: 'gallery.items.ourVineyards',    image: vineyards3 },
    { id: 12, category: 'sports',  titleKey: 'gallery.items.sportsCourts',     image: sports1 },
    { id: 13, category: 'sports',  titleKey: 'gallery.items.sportsCourts',     image: sports2 },
    { id: 14, category: 'restaurant',titleKey:'gallery.items.traditionalRestaurant', image: restaurantImg },
    { id: 15, category: 'terrace', titleKey: 'gallery.items.sunsetTerrace',    image: terrace1 },
    { id: 16, category: 'sauna', titleKey: 'gallery.items.sauna', image: sauna1 },
  ];

  const categories = [
    { code: 'all',        labelKey: 'gallery.categories.all' },
    { code: 'building',   labelKey: 'gallery.categories.building' },
    { code: 'pool',       labelKey: 'gallery.categories.pool' },
    { code: 'jacuzzi',    labelKey: 'gallery.categories.jacuzzi' },
    { code: 'vineyards',  labelKey: 'gallery.categories.vineyards' },
    { code: 'sports',     labelKey: 'gallery.categories.sports' },
    { code: 'restaurant', labelKey: 'gallery.categories.restaurant' },
    { code: 'terrace',    labelKey: 'gallery.categories.terrace' },
    { code: 'sauna', labelKey: 'gallery.categories.sauna' }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(img => img.category === activeFilter);

  return (
    <div className='gallery-page'>
      <div className='gallery-header'>
        <h2>{t('gallery.title')}</h2>
        <p>{t('gallery.subtitle')}</p>
      </div>

      <div className='gallery-filters'>
        {categories.map((cat) => (
          <button
            key={cat.code}
            className={`filter-btn ${activeFilter === cat.code ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.code)}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      <div className='gallery-grid'>
        {filteredImages.map((item) => (
          <div key={item.id} className='gallery-card' onClick={() => setSelectedImg(item.image)}>
            <div className='gallery-img-wrapper'>
              <img src={item.image} alt={t(item.titleKey)} />
              <div className='gallery-overlay'>
                <span>{t(item.titleKey)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImg} alt="Enlarged view" className="modal-content" />
        </div>
      )}
    </div>
  );
}