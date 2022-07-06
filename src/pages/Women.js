import ProductItem from '../components/ProductItem';
import ProductDescription from '../components/ProductDescription';
import ProductPrice from '../components/ProductPrice';
import ButtonContainer from '../components/ButtonContainer';
import LargeButton from '../components/LargeButton';

const Women = () => {
  return (
    <div className='women'>
      <ProductItem />
      <div className='description-container'>
        <ProductDescription />
        <ProductPrice />
        <div className='buttons'>
          <ButtonContainer />
          <LargeButton />
        </div>
      </div>
    </div>
  );
};
export default Women;
