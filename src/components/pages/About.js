import React from "react";
import '../../styles/About.css';
import Footer from "../Footer";

export default function About() {
    return (
        <>
            <div className={'about-page'}>
                <div className={'narrow'}>
                    <h2>"The best preparation for tomorrow is doing your best today."</h2>
                    <div className={'top-line'}></div>
                    <div className={'about-container'}>
                        {/*<div id={'img-container'}>*/}
                        {/*    <img src={'/images/img-1.jpg'} alt={'playing_the_drums'}*/}
                        {/*        className={'about-img img-1'}/>*/}
                        {/*</div>*/}
                        <section id={'about'}>
                            <p>
                                I am a full-stack web developer currently residing in Los Angeles.
                                I am skilled at building web applications from the ground up – from
                                concept, to design, to writing functional, testable, and efficient code
                                while focusing on responsive and elegant designs. I continue to learn new
                                technologies and techniques through freelancing and my own side projects
                                that I use to influence and improve my overall ability in web development.
                            </p><br/>
                            <p>
                                My coding philosophy starts with strategic planning, designing, and
                                developing applications to help reach desired objectives and goals.
                                I surround myself with technical people, activities, hobbies, and
                                endeavors that push me to keep learning through experience. My background
                                was originally in music and music technology. I have always loved playing
                                music ever since I was young and had dreams to take over the world. Now
                                my sights are set on impacting the world through technology by helping
                                businesses succeed and accomplish new goals.
                            </p>
                        </section>
                    </div>

                    <section className={'text-center about-skills'}>
                        <h3>Skills</h3>
                        <div className={'skills-list'}>
                            <i className="fab fa-js-square"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-shopify"></i>
                            <i className="fab fa-react"></i>
                            <i className="fab fa-node-js"></i>
                            <i className="fab fa-aws"></i>
                            <i className="fab fa-css3-alt"></i>
                            <i className="fab fa-github"></i>

                        </div>
                    </section>
                </div>
            </div>
        <Footer />
        </>
    )
 }