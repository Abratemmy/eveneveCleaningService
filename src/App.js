import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './EvenEveCleaning/Components/Footer/Footer';
import ScrollToTop from './components/scrollToTop';
// import Router from './components/Router';

const Router = React.lazy(() => import('./components/Router'))

function App() {
  return (
    <div className="">
      <ScrollToTop />
      <Header />
      <div className=' w-full'>
        <div className='mt-20'>
          <Suspense fallback={<div style={{ height: '80px' }}>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}>
            <Router />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
