import React from 'react';

//Being called from App.js to the home page
const Content = () => {
  return (
    <div>
      <h1>Hi!</h1>
      <h2>The date today is: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;