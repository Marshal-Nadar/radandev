'use client';

import AdBlockNotice from '@/components/AdBlockNotice/AdBlockNotice';
import { AdblockContext } from '@/context/AdblockContext';
import { trackGAEvent } from '@/utils/google-analytics';

import React, { useContext, useEffect } from 'react';

const AdblockProvider = ({ children }) => {
  const { adblock } = useContext(AdblockContext);

  useEffect(() => {
    if (adblock) {
      trackGAEvent('Adblock Page Loaded', 'Adblock Page Loaded', 'AdBlockPage');
    }
  }, [adblock]);

  if (adblock) {
    return <AdBlockNotice />;
  } else {
    return <div>{children}</div>;
  }
};

export default AdblockProvider;
