import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Screen1/Index';
import RotatingWheel from './components/screen2/Index'
import CouponPage from './components/screen3/Index'

function App() {

  const content = [
    '30% SITEWIDE OFF',
    'BUY 1 GET 1 FREE',
    'HOT CHOCLATE FREE WITH TEA',
    'FREE 50G TEA ON PURCHASE OF RS,500',
    'BUY 2 EFFERVESCENT TABLETS & GET 1 FREE',
    'FREE COFFEE MUG ON PURACHASE WORTH 1000+'
  ]

  const [spinning, setSpinning] = useState(false);

  function selectResultEventHandler(data) {
    if (content.length > 0 && spinning !== true) {
      var selectedIndex = data;
      localStorage.setItem('index', data);

      // set this state to disable tab and wheel click when spinning
      setSpinning(true);

      setTimeout(() => {
        setSpinning(false);
        localStorage.setItem('offer', content[selectedIndex]);
        window.location = '/coupon';
      }, 6000);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/spinner' element={
            <RotatingWheel items={content}
              onChange={selectResultEventHandler}
              spinning={spinning} />}
          />
          <Route path='/coupon' element={<CouponPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
