import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const currencyOptions = [
    { label: 'Dollar', value: '$' },
    { label: 'Pound', value: '£' },
    { label: 'Euro', value: '€' },
    { label: 'Rupee', value: '₹' }
  ];
  const [selectedCurrency, setSelectedCurrency] = useState('$');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (selectedOption) => {
    const selectedCurrency = selectedOption.value;
    setSelectedCurrency(selectedCurrency);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedCurrency,
    });
  };

  const handleOptionHover = (event) => {
    event.target.style.backgroundColor = '#fff';
  };

  const handleOptionLeave = (event) => {
    event.target.style.backgroundColor = 'transparent';
  };

  const dropdownStyle = {
    color: '#fff',
    backgroundColor: '#77E9A6',
    borderRadius: '0',
  };

  const dropdownItemStyle = {
    color: '#000',
    backgroundColor: 'transparent',
  };

  return (
    <div className='form-group'>
      <div className='dropdown' onClick={handleDropdownToggle}>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='currencyDropdown'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded={isDropdownOpen}
          style={dropdownStyle}
        >
          Currency({selectedCurrency}{' '}
          {currencyOptions.find((option) => option.value === selectedCurrency)?.label})
        </button>
        <div
          className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
          aria-labelledby='currencyDropdown'
          style={{ backgroundColor: '#77E9A6' }}
        >
          {currencyOptions.map((option) => (
            <button
              key={option.value}
              className='dropdown-item'
              type='button'
              onClick={() => handleChange(option)}
              onMouseEnter={handleOptionHover}
              onMouseLeave={handleOptionLeave}
              style={dropdownItemStyle}
            >
              {option.value} {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;
