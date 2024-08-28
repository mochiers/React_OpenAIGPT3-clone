import React from 'react';
import possibilityImage from '../../assets/possibility.png'; 
import './possibility.css';

const Possibility= () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Nam lacinia sit amet eros sed semper.</h4>
        <h1 className="gradient__text">Interdum et malesuada  <br /> fames ac ante ipsum primis in faucibus.</h1>
        <p>Sed quis ullamcorper augue. Fusce accumsan lacinia ligula eu cursus. Aliquam sit amet fringilla nibh, id congue mauris.</p>
        <h4>Aliquam posuere rhoncus dignissim</h4>
      </div>
    </div>
  );
}

export default Possibility