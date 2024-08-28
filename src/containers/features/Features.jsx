import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Vestibulum ullamcorper leo eget nisi tincidunt vulputate. ',
    text: 'In hac habitasse platea dictumst. Aenean molestie, ante eget convallis condimentum, ante quam facilisis sapien, a semper elit lacus eget odio',
  },
  {
    title: ' Morbi a fermentum odio.',
    text: 'Suspendisse varius vestibulum elit et rhoncus. Donec mauris nibh, luctus ac dignissim vel, posuere ut neque.',
  },
  {
    title: 'Maecenas gravida elit aliquam justo bibendum,',
    text: 'Ut mollis quam efficitur.',
  },
  {
    title: 'Cras sed nulla id augue eleifend pellentesque. ',
    text: 'Vivamus pharetra, mauris sed viverra rutrum, arcu dolor pulvinar sapien, in accumsan ligula mi non arcu. Sed a felis in quam pharetra imperdiet. Cras nec sem a nisi convallis placerat id a ante. Aenean at.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Nam eget sem porta, euismod orci ac, euismod nisi.</h1>
      <p>Quisque tortor diam, volutpat eu lorem non. </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;