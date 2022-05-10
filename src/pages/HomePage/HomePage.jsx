import React from 'react';
const HomePage = ({ text = 'home' }) => {
  return (
    <div>
      <h1>This home page</h1>
      <p>props test: {text}</p>
    </div>
  );
};

export default HomePage;
