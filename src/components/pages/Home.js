import React from 'react';
import '../../App.css';
import '../styles/HeroSection.css';

import Footer from '../Footer';
import Typical from "react-typical";
import { Button } from "../Button";

export default function Home() {
  return (
    <>
        <section className='hero-container'>
            <video src='/videos/video-5.mp4' autoPlay loop muted />
            <h1>I am Lachlan, a
                <Typical
                    className={"typical"}
                    steps={['React Developer.', 2500, 'Full-stack Engineer.', 2500, 'Web Designer.', 2500]}
                    loop={Infinity}
                />
            </h1>
            <h2>I build web applications with a focus on the end user.</h2>

            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    View My Work &nbsp; <i className="fas fa-book"></i>
                    {/*<i className="fas fa-binoculars"></i>*/}
                </Button>
            </div>
        </section>
        <section className={'container'}>
            <h2>Specialized Skills</h2>
            <p>Allowing my client's needs to dictate design while keeping responsiveness at the forefront.</p>
            <div className={'skills-container'}>
                <div>
                    <i className="fas fa-brain skill-icon"></i>
                    <h3>Conceptualize</h3>
                    <p className={'skills-desc'}>Planning out user stories and outlining the technical tasks to achieve the project's purpose</p>
                </div>
                <div>
                    <i className="fas fa-code skill-icon"></i>
                    <h3>Development</h3>
                    <p className={'skills-desc'}>Writing functional front-end and back-end code that is testable and effective in its purpose.</p>
                </div>
                <div>
                    <i className="fas fa-tv skill-icon"></i>
                    <h3>Design</h3>
                    <p className={'skills-desc'}>Making the project look as good as it functions</p>
                </div>
                <div>
                    <i className="fas fa-user skill-icon"></i>
                    <h3>UI/UX</h3>
                    <p className={'skills-desc'}>Making the user experience as good as the code that drives it.</p>
                </div>
            </div>
        </section>
        <div className="about">
            <h3>A little more about me...</h3>
            I am a full-stack React and Node.js developer with a background in music and music technology.   I take pride in having a self-disciplined practice, as well as the idea of being humbled by new challenges.   Outside of the world of coding I love seeking adventure in the outdoors whether it be surfing, climbing, or visiting places for the first time.   I want the opportunity to be around experienced developers in order to keep growing, face new challenges, and to be a part of the bigger picture of a product I fully believe in.   Feel free to contact me or browse my projects.
        </div>
      <Footer />
    </>
  );
}
