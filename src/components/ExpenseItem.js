import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost, currency }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{currency} {cost}</td>
      <td>
        <button
          className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
          onClick={() => increaseAllocation(name)}
          style={{ width: '30px', height: '30px', fontSize: '30px', fontFamily: 'Arial' }}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
          onClick={() => decreaseAllocation(name)}
          style={{ width: '30px', height: '30px', fontSize: '30px', fontFamily: 'Arial' }}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
