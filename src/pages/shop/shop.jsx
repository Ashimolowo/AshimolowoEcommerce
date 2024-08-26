import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import { Route, Routes } from 'react-router-dom';
import CollectionPage from '../collection/collection';

const ShopPage = () => {
  return ( 
    <div className='shop-page'>
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:categoryId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
