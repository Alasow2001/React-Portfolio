import React from 'react';
import ProjectList from '../ProjectList';

export default function Portfolio() {
  return (
    <div>
      <h1 className='portfolio-title'>Recent Projects</h1>
      <p className='description'>
        Welcome to my Portfolio page. Here, you can see a list of some of my most recent projects.
      </p>

      <div className='project-container'>
        <ProjectList />
      </div>
    </div>
  );
}
