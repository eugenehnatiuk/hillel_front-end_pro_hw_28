import React from 'react';
import '../style/main.scss';

const Logo = ({ className, imgUrl }) => (
  <div className={className}>
    <img src={imgUrl} alt="Logo"/>
  </div>
);

export default Logo;
