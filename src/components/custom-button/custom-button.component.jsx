import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isSaveBtn }) => (
  <>
    <button className={`${isSaveBtn ? 'save-btn' : ''}`}>{children}</button>
  </>
);

export default CustomButton;
