'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

// Your AdSense Publisher ID (to be replaced with actual ID)
const ADSENSE_CLIENT = 'ca-pub-6312231252684715';

export default function AdUnit({ slot, format = 'auto', style, className }: AdUnitProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has given cookie consent
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'all') {
      setHasConsent(true);
    }

    // Listen for consent changes
    const handleConsent = () => {
      const newConsent = localStorage.getItem('cookie-consent');
      if (newConsent === 'all') {
        setHasConsent(true);
      }
    };

    window.addEventListener('cookie-consent-given', handleConsent);
    return () => window.removeEventListener('cookie-consent-given', handleConsent);
  }, []);

  // Don't render ads if no consent
  if (!hasConsent) {
    return null;
  }

  return (
    <div className={className} style={{ 
      textAlign: 'center', 
      margin: '2rem 0',
      minHeight: '100px',
      ...style 
    }}>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <Script id={`ad-${slot}`} strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}

// Pre-configured ad components for easy use
export function AdAfterIntro() {
  return <AdUnit slot="SLOT_AFTER_INTRO" format="horizontal" />;
}

export function AdInContent() {
  return <AdUnit slot="SLOT_IN_CONTENT" format="rectangle" />;
}

export function AdSidebar() {
  return <AdUnit slot="SLOT_SIDEBAR" format="vertical" />;
}

export function AdFooter() {
  return <AdUnit slot="SLOT_FOOTER" format="horizontal" />;
}
