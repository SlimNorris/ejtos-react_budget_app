import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);

  const handleChange = (e) => {
    let newBudget = parseFloat(e.target.value);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    if (newBudget < totalExpenses) {
      alert('You cannot reduce the budget value lower than the spending.');
      return;
    }

    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='budget'>Budget: {currency}</label>
      <input
        id='budget'
        type='number'
        value={budget}
        onChange={handleChange}
        step={10}
        min={0}
        max={20000}
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default Budget;
