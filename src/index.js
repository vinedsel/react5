import React from 'react';
import { render } from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About title = "About" />;
    case '/topics':
      return <Topics title = "Topics"/>;
    default:
      return <Home title = "Home"/>;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});
