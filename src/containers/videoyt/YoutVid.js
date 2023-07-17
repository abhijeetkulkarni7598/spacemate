import React from 'react';
import ReactPlayer from 'react-player'
import './YoutVid.css';

const YoutVid = () => {
   
  return (
      <>
      <div className="mt-5">
        <section className="services-main-container px-10">
            <div className="container service-container">
                <div className="section-head col-sm-12 px-5">
                    <h4>
                        <span>Our</span> Video
                    </h4>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-5 react-yt-vid"> 
                <ReactPlayer controls url='https://www.youtube.com/watch?v=szKG9u4iFSk' />
                </div>
            </div>
        </section>
      </div>
      
      </>
    );
};

export default YoutVid;
