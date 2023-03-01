import React from 'react';
import ProjectList from '../ProjectList';

export default function Portfolio() {
  return (
    <div>
      <h1>Recent Projects</h1>
      <p>
        Welcome to my Portfolio page. Here, you can see a list of some of my most recent projects.
      </p>

      <div>
        <ProjectList />
      </div>
    </div>
  );
}
