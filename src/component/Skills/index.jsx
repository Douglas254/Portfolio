import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skillls</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Webpack</li>
          <li>Chrome Dev</li>
          <li>Git &amp; GitHub</li>
        </div>
        <div>
          <strong>Unit Test:</strong>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>React-test</li>
          <li>SupperTest</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
