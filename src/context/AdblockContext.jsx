'use client';

import { createContext, useEffect, useState } from 'react';

export const AdblockContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
};

export const AdblockContextProvider = ({ children }) => {
  const [adblock, setAdblock] = useState(false);

  const REQUEST_URL =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

  const REQUEST_CONFIG = {
    method: 'HEAD',
    mode: 'no-cors',
  };

  const checkAdsBlocked = callback => {
    fetch(REQUEST_URL, REQUEST_CONFIG)
      .then(response => {
        callback(response.redirected);
      })
      .catch(() => {
        callback(true);
      });
  };

  useEffect(() => {
    checkAdsBlocked(adsBlocked => {
      setAdblock(adsBlocked);
    });
  }, []);

  return (
    <AdblockContext.Provider value={{ adblock }}>
      {children}
    </AdblockContext.Provider>
  );
};
