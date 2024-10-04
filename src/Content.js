import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hi!</h1>
      <h2>The date today is: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;