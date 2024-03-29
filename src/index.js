import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App/Header.jsx';
import Main from './App/Main.jsx';
import Footer from './App/Footer.jsx';

// const header = React.createElement('header', { className: 'header' });
// const nav = React.createElement;

const mainEl = document.querySelector('main');
const root = ReactDOM.createRoot(mainEl);

root.render(
  <>
    <Header
      headerClass="header"
      navClass="header__navmenu container"
      navMenuListClass="header__navmenu-list "
    />
    <Main sectionClass="main-section container" />
    <Footer />
  </>
);
