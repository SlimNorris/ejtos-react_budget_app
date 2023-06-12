import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <div className='budget-details'>
        <div>
          <span>Remaining: {currency === '$' ? '$' : currency === '£' ? '£' : currency === '€' ? '€' : currency === '₹' ? '₹' : ''}{budget - totalExpenses}</span>
        </div>
      </div>
    </div>
  );
};

export default Remaining;
