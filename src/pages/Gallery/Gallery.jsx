import { useState } from 'react';
import useLanguage from '../../context/useLanguage';
import './Gallery.css';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryData = [
    { id: 1, category: 'building', titleKey: 'gallery.items.mainBuilding',     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop' },
    { id: 2, category: 'pool',     titleKey: 'gallery.items.infinityPool',     image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'jacuzzi',  titleKey: 'gallery.items.spaJacuzzi',       image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'vineyards',titleKey: 'gallery.items.ourVineyards',     image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop' },
    { id: 5, category: 'sports',   titleKey: 'gallery.items.sportsCourts',     image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop' },
    { id: 6, category: 'restaurant',titleKey:'gallery.items.traditionalRestaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop' },
    { id: 9, category: 'terrace',  titleKey: 'gallery.items.sunsetTerrace',    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop' },
{ id: 10, category: 'sauna', titleKey: 'gallery.items.sauna', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2c154?q=80&w=600&auto=format&fit=crop' },
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