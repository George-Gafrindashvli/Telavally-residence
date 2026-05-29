import { useState, useEffect, useCallback } from "react";
import useLanguage from "../../context/useLanguage";
import "./Home.css";
import banner1 from "../../assets/images/bannerimg1.png";
import banner2 from "../../assets/images/bannerimg2.png";
import banner3 from "../../assets/images/bannerimg3.png";
import sauna from "../../assets/images/sauna.png";
import jacuzzi from "../../assets/images/jacuzzi.png";
import basketball from "../../assets/images/basketball.png";

const heroImages = [banner1, banner2, banner3];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  /* Auto-advance; reset timer on manual nav */
  const [timer, setTimer] = useState(null);

  const startTimer = useCallback(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroImages.length);
    }, 5000);
    setTimer(id);
    return id;
  }, []);

  useEffect(() => {
    const id = startTimer();
    return () => clearInterval(id);
  }, [startTimer]);

  const goToSlide = (index) => {
    clearInterval(timer);
    setCurrentSlide(index);
    startTimer();
  };

  return (
    <div className="home-container">

      {/* ── HERO ── */}
      <section
        className="hero-section"
        aria-label={t("common.brandName")}
      >
        {heroImages.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt=""                          /* decorative; hero text carries meaning */
            aria-hidden="true"
            className={`hero-image ${index === currentSlide ? "active" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

        <div className="hero-overlay">
          <p>{t("home.welcomeSubtitle")}</p>
          <h2>{t("home.welcomeTitle")}</h2>

          <div
            className="slider-dots"
            role="tablist"
            aria-label="Slide navigation"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}`}
                className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="gallery-section">
        <h3 className="section-title">{t("home.ourSpaces")}</h3>
        <div className="photos">
          <div className="photo-card">
            <img src={sauna}      alt={t("home.sauna")      || "Sauna"} loading="lazy" />
          </div>
          <div className="photo-card">
            <img src={jacuzzi}    alt={t("home.jacuzzi")    || "Jacuzzi"} loading="lazy" />
          </div>
          <div className="photo-card">
            <img src={basketball} alt={t("home.basketball") || "Basketball court"} loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-content">

          <div className="contact-info">
            <h4>{t("home.contactUs")}</h4>
            <p>
              <span aria-hidden="true">📍</span>
              {t("home.address")}
            </p>
            <p>
              <span aria-hidden="true">📞</span>
              <a href={`tel:${t("home.phone")}`} style={{ color: "inherit", textDecoration: "none" }}>
                {t("home.phone")}
              </a>
            </p>
            <p>
              <span aria-hidden="true">✉️</span>
              <a href={`mailto:${t("home.email")}`} style={{ color: "inherit", textDecoration: "none" }}>
                {t("home.email")}
              </a>
            </p>
          </div>

          <div className="social-links">
            <h4>{t("home.followUs")}</h4>
            <div className="social-buttons">
              <a
                href="https://www.instagram.com/telavalleyresidence/"
                target="_blank"
                rel="noreferrer noopener"
                className="social-item"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt=""
                  aria-hidden="true"
                />
                <span>{t("home.instagram")}</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100082167439226"
                target="_blank"
                rel="noreferrer noopener"
                className="social-item"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt=""
                  aria-hidden="true"
                />
                <span>{t("home.facebook")}</span>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t("common.brandName")}.{" "}
            {t("common.allRightsReserved")}.
          </p>
        </div>
      </footer>

    </div>
  );
}