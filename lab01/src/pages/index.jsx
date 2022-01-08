import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import NavBar from '../components/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export default function Index() {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    );
}