import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('GEO');

  const languages = [
    { code: 'ENG', name: 'English' },
    { code: 'GEO', name: 'ქართული' },
    { code: 'RUS', name: 'Русский' }
  ];

  const handleLangChange = (code) => {
    setCurrentLang(code);
    setIsOpen(false);
  };

  // ნავიგაციის მასივი, რომ კოდი იყოს სუფთა და დინამიური
  const navigation = [
    { path: '/', label: 'Home', end: true },
    { path: '/rooms', label: 'Rooms', end: false },
    { path: '/gallery', label: 'Gallery', end: false }
  ];

  return (
    <div className='header'>
      <div className='logo-container'>
        <img 
          src="https://e7.pngegg.com/pngimages/722/126/png-clipart-web-development-computer-icons-world-wide-web-logo-symmetry.png" 
          alt="logo" 
          className='logo' 
        />
        <h1>telavally residence</h1>
      </div>

      {/* მთავარი ნავიგაცია */}
      <ul className='nav-links'>
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              end={item.end}
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ენების დროპდაუნი */}
      <div className='lang-dropdown-container'>
        <button className='lang-button' onClick={() => setIsOpen(!isOpen)}>
          <span>{currentLang}</span>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>▾</span>
        </button>
        
        {isOpen && (
          <ul className='dropdown-menu'>
            {languages.map((lang) => (
              <li 
                key={lang.code} 
                className={currentLang === lang.code ? 'active-lang' : ''}
                onClick={() => handleLangChange(lang.code)}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}