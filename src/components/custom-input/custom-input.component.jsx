import React from 'react';

import './custom-input.style.scss';

const CustomInput = ({ handleChange, ...otherProps }) => (
  <>
    <input onChange={handleChange} {...otherProps} />
  </>
);

export default CustomInput;
