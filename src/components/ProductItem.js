import { useState } from 'react';

const ProductItem = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    // e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div className='product-item'>
      <div className='main-pic'>
        <img src='../../images/image-product-1.jpg' alt='product image' />
      </div>
      <div className='thumbnails'>
        <div className='thumb-container'>
          <img
            src='../../images/image-product-1-thumbnail.jpg'
            alt='product image'
            className={
              isActive ? 'thumb-pic pic-1 selected' : 'thumb-pic pic-1'
            }
            onClick={() => handleActive()}
          />
        </div>
        <div className='thumb-container'>
          <img
            src='../../images/image-product-2-thumbnail.jpg'
            alt='product image'
            className='thumb-pic pic-2'
            onClick={handleActive}
          />
        </div>
        <div className={'thumb-container'}>
          <img
            src='../../images/image-product-3-thumbnail.jpg'
            alt='product image'
            className='thumb-pic pic-3'
            onClick={handleActive}
          />
        </div>
        <div className='thumb-container'>
          <img
            src='../../images/image-product-4-thumbnail.jpg'
            alt='product image'
            className='thumb-pic pic-4'
            onClick={handleActive}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
