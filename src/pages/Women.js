import ProductItem from '../components/ProductItem';
import ProductDescription from '../components/ProductDescription';
import ProductPrice from '../components/ProductPrice';

const Women = () => {
  return (
    <div className='women'>
      <ProductItem />
      <div className='description-container'>
        <ProductDescription />
        <ProductPrice />
      </div>
    </div>
  );
};
export default Women;
