import { NavLink } from 'react-router-dom';
import useLanguage from '../../context/useLanguage';
import './Header.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { path: '/', labelKey: 'navbar.home', end: true },
    { path: '/rooms', labelKey: 'navbar.rooms', end: false },
    { path: '/gallery', labelKey: 'navbar.gallery', end: false }
  ];

  return (
    <div className='header'>
      <div className='logo-container'>
        <img 
          src="https://e7.pngegg.com/pngimages/722/126/png-clipart-web-development-computer-icons-world-wide-web-logo-symmetry.png" 
          alt="logo" 
          className='logo' 
        />
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

      <div className='lang-buttons'>
        <button 
          className={`lang-btn ${language === 'ka' ? 'active' : ''}`}
          onClick={() => setLanguage('ka')}
        >
          KA
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>
    </div>
  );
}