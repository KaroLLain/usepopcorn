import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Teribble', 'Bad', 'Was OK', 'Good', 'Amazing']} />
    <StarRating color="pink" size={50} className="test" defaultRating={3} /> */}
  </React.StrictMode>
);
