import { useState, useEffect } from 'react';
import Carousel from './shared/Carousel';

function LatestMobile() {
  return (
      <Carousel
        width={400}
        height={500}
        slides={3}
      />
    
  );
}

export default LatestMobile;
