import { useState } from 'react';
import { Button } from 'reactstrap';

const CounterButtons = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleCounterMinus = (e) => {
    e.preventDefault();
    if (counter < 1) return 0;
    setCounter(counter - 1);
    setIsActive(!isActive);
    console.log(counter);
  };
  const handleCounterPlus = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setIsActive(!isActive);
    console.log(counter);
  };

  return (
    <div className='button-container'>
      <Button className='btn btn-minus' onClick={handleCounterMinus}>
        <img
          className='btn-img'
          src='../../images/icon-minus.svg'
          alt='minus'
        />
      </Button>
      <div className='counter'>{counter}</div>
      <Button className='btn btn-plus' onClick={handleCounterPlus}>
        <img className='btn-img' src='../../images/icon-plus.svg' alt='plus' />
      </Button>
    </div>
  );
};
export default CounterButtons;
