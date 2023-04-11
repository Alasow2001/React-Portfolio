import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div>
      <h1 className='homepage'>Home Page</h1>

      <p className='intro'>
      Hi there, I'm Ahmed Alasow. 👋
      I am a pasionate back-end developer, currently open for employment. 
      I have recently graduated from a 6 month coding bootcamp from the University of Birmingham, 
      where I have learned and developed skills in several programming languages such as HTML, CSS, JavaScript.
      </p>
      <p className='intro'>
        The sliding images below showcase the various tools and technologies I have been using since the beginning of my software developement journey.
      </p>

      {/* <ul className='toolList'>
        <li>MongoDB</li>

        <li>MySQL</li>

        <li>JavaScript</li>

        <li>ReactJS</li>

        <li>Node</li>

        <li>HTML and CSS</li>
      </ul> */}
      <Carousel className='carousel'>
        <Carousel.Item className='sliderImage'>
          <div className='d-flex justify-content-center'>
            <img src='https://spin.atomicobject.com/wp-content/uploads/React-Typescript.png' alt='first-slide'></img>
          </div>
        </Carousel.Item>

        <Carousel.Item className='sliderImage'>
          <div className='d-flex justify-content-center'>
            <img src='https://www.freepnglogos.com/uploads/javascript/logo-html-5-css-javascript-source-code-for-the-taking-23.png' alt='second-slide'></img>
          </div>
        </Carousel.Item>

        <Carousel.Item className='sliderImage'>
          <div className='d-flex justify-content-center'>
            <img src='https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png' alt='third slide'></img>
          </div>
        </Carousel.Item>

        <Carousel.Item className='sliderImage'>
          <div className='d-flex justify-content-center'>
            <img src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/98638395/original/24cae106497c3f381594fbacab7e43749285d411/design-and-create-sql-mysql-and-mongodb-database.png' alt='third slide'></img>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
