import React from 'react'
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';

export default function ProductList() {
  // gets the data of products
  const {filter_poducts, setGridView}=useFilterContext();

  if(setGridView){
    return <GridView products={filter_poducts}/>
  };
  
  // if(setGridView===false){
  //   return <ListView products={filter_poducts}/>
  // };
  
};
