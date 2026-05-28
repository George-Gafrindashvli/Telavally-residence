import { useState, useEffect } from "react";
import useLanguage from "../../context/useLanguage";
import "./Home.css";
import banner1 from '../../assets/images/bannerimg1.png'
import banner2 from '../../assets/images/bannerimg2.png'
import banner3 from '../../assets/images/bannerimg3.png'
import sauna from '../../assets/images/sauna.png'
import jacuzzi from '../../assets/images/jacuzzi.png'
import baketball from '../../assets/images/basketball.png'





const heroImages = [
  banner1,
  banner2,
  banner3,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* მთავარი დიდი "Hero" სექცია სლაიდერით */}
      <div className="hero-section">
        {heroImages.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`${t('common.brandName')} View ${index + 1}`}
            /* ფოტოს ვაძლევთ კლასს 'active' მხოლოდ მაშინ, როცა მისი ინდექსი ემთხვევა სთეითს */
            className={`hero-image ${index === currentSlide ? "active" : ""}`}
          />
        ))}
        
        <div className="hero-overlay">
          <h2>{t('home.welcomeTitle')}</h2>
          <p>{t('home.welcomeSubtitle')}</p>
          
          {/* პატარა წერტილები (ინდიკატორები) სლაიდერის ქვემოთ */}
          <div className="slider-dots">
            {heroImages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                onClick={() => setCurrentSlide(index)} // წერტილზე კლიკითაც შეიცვლება
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3 სურათიანი გალერეის სექცია */}
      <div className="gallery-section">
        <h3 className="section-title">{t('home.ourSpaces')}</h3>
        <div className="photos">
          <div className="photo-card">
            <img src={sauna} alt="Deluxe Room" />
          </div>
          <div className="photo-card">
            <img src={jacuzzi} alt="Lobby & Lounge" />
          </div>
          <div className="photo-card">
            <img src={baketball} alt="View & Nature" />
          </div>
        </div>
      </div>

      {/* კონტაქტებისა და სოციალური ქსელების ფუტერი */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="contact-info">
            <h4>{t('home.contactUs')}</h4>
            <p>📍 {t('home.address')}</p>
            <p>📞 {t('home.phone')}</p>
            <p>✉️ {t('home.email')}</p>
          </div>
          
          <div className="social-links">
            <h4>{t('home.followUs')}</h4>
            <div className="social-buttons">
              <a href="https://www.instagram.com/telavalleyresidence/" target="_blank" rel="noreferrer" className="social-item">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
                <span>{t('home.instagram')}</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082167439226" target="_blank" rel="noreferrer" className="social-item">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                <span>{t('home.facebook')}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('common.brandName')}. {t('common.allRightsReserved')}.</p>
        </div>
      </footer>
    </div>
  );
}