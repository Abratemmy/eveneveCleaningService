import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../EvenEveCleaning/Pages/Home/Home';
import Aboutus from '../EvenEveCleaning/Pages/About/Aboutus';
import Contact from '../EvenEveCleaning/Pages/Contact/Contact';
import Services from '../EvenEveCleaning/Pages/Services/Services';

// const Home = React.lazy(() => import('../pages/Home'));

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about" caseSensitive={false} element={<Aboutus />} />
            <Route exact path="/contact" caseSensitive={false} element={<Contact />} />
            <Route exact path="/services" caseSensitive={false} element={<Services />} />
        </Routes>
    )
}
export default Router