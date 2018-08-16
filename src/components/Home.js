import React from 'react';
import Header from './Header';

const Home = ({ children }) => {
  console.log(children)
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Home;
