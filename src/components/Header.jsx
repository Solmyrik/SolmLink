import React, { useState } from 'react';

const Header = ({ theme, setTheme }) => {
  return (
    <header className={theme ? 'header' : 'header header__black'}>
      <div className="header__container">
        <a href="/" className="header__logo">
          SolmLink
        </a>
        <div onClick={() => setTheme(!theme)} className="header__selector">
          {theme ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title />
              <circle cx="12" cy="12" fill="#464646" r="5" />
              <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="#464646" />
              <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="#464646" />
              <path
                d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z"
                fill="#464646"
              />
              <path
                d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z"
                fill="#464646"
              />
              <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" fill="#464646" />
              <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" fill="#464646" />
              <path
                d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z"
                fill="#464646"
              />
              <path
                d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z"
                fill="#464646"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title />
              <path
                d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"
                fill="#f3f4f4"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
