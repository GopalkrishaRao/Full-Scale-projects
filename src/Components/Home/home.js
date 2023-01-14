import React from 'react';
import Products from './Cards/Products';
import Slider from './Slider/Slider';
import ProductDetails from './IndividualProductDetails/ProductDescription';

export default function Home() {
  return (
    <>
    <Slider/>
    <ProductDetails/>
    <Products pImg={"https://placeimg.com/400/225/arch"}/>
    </>
  )
};
