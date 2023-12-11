import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel items={2} activeIndex={index} onSelect={handleSelect} className='carsoulmain'>
      <Carousel.Item>
        <img
          className="d-block w-100 carsoulimg"
          src="images/images/main-banner.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
            <span className='fs7'>SUPERCHARGED FOR PROS</span>
          <h1 className='text-dark my-3 fs1'>iPad S13+ Pro</h1>
          <p className='text-dark fs7'>From $999.00 or $41.62/mo.<br/>
            for 24 mo. Footnote*</p>
            <button className='buy-button my-2'>
                <Link>
                    <span>buy now</span>
                </Link>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carsoulimg"
          src="images/images/main-banner-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='carousel-caption'>
        <span className='fs7'>SUPERCHARGED FOR PROS</span>
          <h1 className='text-dark my-3 fs1'>Special Sale</h1>
          <p className='text-dark fs7'>From $999.00 or $41.62/mo.<br/>
for 24 mo. Footnote*</p>
<button className='buy-button my-2'>
                <Link>
                    <span>buy now</span>
                </Link>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;