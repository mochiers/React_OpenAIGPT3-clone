import React from 'react';
import Feature from '../../components/feature/Feature';
import './thegpt3.css';

const GPT3 = () => (
  <div className="gpt3__thegpt3 section__margin" id="tgpt3">
    <div className="gpt3__thegpt3-feature">
      <Feature 
        title="What is GPT-3" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu finibus arcu. Suspendisse quis lacus nec nibh fringilla ornare non at sapien. Nunc feugiat felis nibh, in commodo mauris aliquam at. Nam porttitor faucibus metus non viverra. Aenean luctus semper sem non placerat. Maecenas mollis, eros porta gravida vulputate, justo." 
      />
    </div>
    <div className="gpt3__thegpt3-heading">
      <h1 className="gradient__text">Lorem ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="gpt3__thegpt3-container">
      <Feature 
        title="Chatbots" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut lorem sit amet orci blandit blandit id facilisis mi. Integer pellentesque dui ipsum, ac porttitor arcu cursus vel. Nam nunc augue, ullamcorper quis nulla at, cursus semper augue." 
      />
      <Feature 
        title="Knowledgebase" 
        text="In quis malesuada erat. Maecenas viverra, tellus eu tristique suscipit, enim metus pharetra nulla, eu commodo risus nibh ut lectus." 
      />
      <Feature 
        title="Education" 
        text="Aliquam bibendum orci eget malesuada semper. Nam aliquet ligula odio, non scelerisque nisi dapibus vitae. Pellentesque vitae lectus euismod, dictum purus tempus, dictum nibh." 
      />
    </div>
  </div>
);

export default GPT3;

