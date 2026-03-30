/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Marketplace } from './components/Marketplace';
import { Previewer } from './components/Previewer';
import { TemplateRenderer } from './components/TemplateRenderer';
import { TemplateDetails } from './components/TemplateDetails';
import { Checkout } from './components/Checkout';
import { About } from './components/About';
import { Support } from './components/Support';
import { Contact } from './components/Contact';
import { Journal } from './components/Journal';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/template/:id" element={<TemplateDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/preview/:id" element={<Previewer />} />
          <Route path="/render/:id" element={<TemplateRenderer />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
