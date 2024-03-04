import React from 'react';
import Description from './Description.jsx';
import Logo from './Logo.jsx';
import '../style/main.scss';


const imgUrl = '../images/main_photo.jpg';

const Main = ({sectionClass}) => {
  return (
    <section className={sectionClass}>
      <Description className="main-section__description" />
      <Logo className="main-section__logo" imgUrl={imgUrl} />
    </section>
  );
};

export default Main;
