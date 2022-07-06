import { Button } from 'reactstrap';

const LargeButton = () => {
  return (
    <div className='large-btn'>
      <Button className='btn orange-btn'>
        <img
          src='../../images/icon-cart-white.svg'
          alt='cart'
          className='cart-icon'
        />
        <span>Add to cart</span>
      </Button>
    </div>
  );
};
export default LargeButton;
