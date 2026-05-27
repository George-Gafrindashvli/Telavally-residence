import { useState, useEffect } from "react";
import "./Home.css";

// სლაიდერის 3 ფოტო
const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop", // შენობა
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1600&auto=format&fit=crop", // აუზი
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop"  // ვენახები
];

export default function Home() {
  // სთეითი მიმდინარე ფოტოს ინდექსისთვის
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // ტაიმერი, რომელიც 5 წამში ერთხელ ცვლის ფოტოს
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000); // 5000ms = 5 წამი

    // ვასუფთავებთ ტაიმერს კომპონენტის "მოკვლისას"
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
            alt={`Telavally Residence View ${index + 1}`}
            /* ფოტოს ვაძლევთ კლასს 'active' მხოლოდ მაშინ, როცა მისი ინდექსი ემთხვევა სთეითს */
            className={`hero-image ${index === currentSlide ? "active" : ""}`}
          />
        ))}
        
        <div className="hero-overlay">
          <h2>Welcome to Luxury & Comfort</h2>
          <p>Experience the heart of Kakheti in style</p>
          
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
        <h3 className="section-title">Our Spaces</h3>
        <div className="photos">
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop" alt="Deluxe Room" />
          </div>
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop" alt="Lobby & Lounge" />
          </div>
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop" alt="View & Nature" />
          </div>
        </div>
      </div>

      {/* კონტაქტებისა და სოციალური ქსელების ფუტერი */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>📍 Shota Rustaveli St, Telavi, Georgia</p>
            <p>📞 +995 555 12 34 56</p>
            <p>✉️ info@telavally.ge</p>
          </div>
          
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-buttons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-item">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-item">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Telavally Residence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}