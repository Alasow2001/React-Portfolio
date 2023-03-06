import React from 'react';

export default function Home() {
  return (
    <div>
      <h1 className='homepage'>Home Page</h1>

      <p className='intro'>
        Hello, my name is Ahmed Alasow and I'm currently studying a Web Development bootcamp at the University of Birmingham. 
        Throughout this bootcamp, I have learnt various programming languages, dependencies as well as a few databases. 
        As the bootcamp has progressed, I have gained a significant amount of experience, enjoyment and fascination with the following tools below:
      </p>

      <ul className='toolList'>
        <li>MongoDB</li>

        <li>MySQL</li>

        <li>JavaScript</li>

        <li>ReactJS</li>

        <li>Node</li>

        <li>HTML and CSS</li>
      </ul>
    </div>
  );
}
