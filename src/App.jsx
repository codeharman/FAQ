import Cards from './Cards';
import Data from './Data';
import { useState } from 'react';

export default function App() {

  const isOpen = Data.map(item => (
    <Cards 
      key={item.id}
      {...item}
    />
  ))

  return (
    <>
      <h1>FAQ Accordion</h1>
      {isOpen}   
    </>
  )
}