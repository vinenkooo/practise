import React, { useState, useEffect, Suspense, lazy } from 'react';

//const MobilePage = lazy(() => import('./page/index_375.jsx'));
//const TabletPage = lazy(() => import('./page/index_768.jsx'));
const DesktopPage = lazy(() => import('./page/App1920.jsx'));

export default function App() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getScreenSize() {
    if (window.matchMedia("(max-width: 375px)").matches) {
      return 'mobile';
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {screenSize === 'mobile' && <MobilePage />}
        {screenSize === 'tablet' && <TabletPage />}
        {screenSize === 'desktop' && <DesktopPage />}
      </Suspense>
    </div>
  );
}
