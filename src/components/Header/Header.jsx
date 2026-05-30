import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useLanguage from '../../context/useLanguage';
import './Header.css';
import pfpImage from '../../assets/avatar/pfp.png';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { path: '/', labelKey: 'navbar.home', end: true },
    { path: '/rooms', labelKey: 'navbar.rooms', end: false },
    { path: '/gallery', labelKey: 'navbar.gallery', end: false }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className='header'>
        <div className='logo-container'>
          <img src={pfpImage} alt="logo" className='logo' />
          <h1>{t('common.brandName')}</h1>
        </div>

        <ul className='nav-links'>
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              >
                {t(item.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='header-right'>
          <div className='lang-buttons desktop-lang'>
            <button
              className={`lang-btn ${language === 'ka' ? 'active' : ''}`}
              onClick={() => setLanguage('ka')}
            >KA</button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >EN</button>
          </div>

          <button
            className='hamburger'
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="მენიუ"
          >
            <span className={`bar b1 ${menuOpen ? 'open' : ''}`} />
            <span className={`bar b2 ${menuOpen ? 'open' : ''}`} />
            <span className={`bar b3 ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* მობილური overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={closeMenu}
      />

      {/* მობილური მენიუ */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className='mobile-nav-links'>
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}
                onClick={closeMenu}
              >
                {t(item.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='mobile-lang-buttons'>
          <button
            className={`lang-btn ${language === 'ka' ? 'active' : ''}`}
            onClick={() => { setLanguage('ka'); closeMenu(); }}
          >KA</button>
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => { setLanguage('en'); closeMenu(); }}
          >EN</button>
        </div>
      </div>
    </>
  );
}