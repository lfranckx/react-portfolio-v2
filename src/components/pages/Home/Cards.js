import React from "react";
import '../../../styles/Cards.css';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Process() {
    return (
        <div id={'process'} className={'container'}>
            <section className={'textCenter padY2 container' +
            'container timeline  margin-auto block'}>
                <h2 className={'sectionTitle'}>My Creative Process</h2>
                <div className={'bottomLine'}></div>
                <p className={'lead'}>I start with figuring out what the customer wants their application to do and how they want it to look.</p>
                <div id={'timeline'}>
                    <ul>
                        <li id={'card-1'}>
                            <ScrollAnimation>
                                <div className={'card'}>
                                    <i className="fas fa-comments h1"></i>
                                    <h3 className={'h2'}>Discuss Project</h3>
                                    <p className={'h3'}>Meet with client and discuss project needs and desired design.</p>
                                </div>
                            </ScrollAnimation>

                        </li>
                        <li id={'card-2'}>
                            <div>
                                <div className={'card'}>
                                    <i className="far fa-square h1"></i>
                                    <h3 className={'h2'}>Design Wireframes</h3>
                                    <p className={'h3'}>Create wireframes based on the conversation so the client can see what the project would look like when finished.</p>
                                </div>
                                <div className={'bar-right'}></div>
                            </div>
                        </li>
                        <li id={'card-3'}>
                            <div className={'bar-left'}></div>
                            <div className={'card'}>
                                <i className="fas fa-laptop-code h1"></i>
                                <h3 className={'h2'}>Write Code</h3>
                                <p className={'h3'}>Write functional code while remaining in communication with the client at each step to make sure their needs haven't changed.</p>
                            </div>
                        </li>
                        <li id={'card-4'}>
                            <div className={'card'}>
                                <i className="fas fa-mobile-alt h1"></i>
                                <h3 className={'h2'}>Make Responsive</h3>
                                <p className={'h3'}>Make sure the website or application is responsive on all of the devices of the user audience.</p>
                            </div>
                            <div className={'bar-right'}></div>
                        </li>
                        <li id={'card-6'}>
                            <div className={'bar-left'}></div>
                            <div className={'card'}>
                                <i className="far fa-calendar-check h1"></i>
                                <h3 className={'h2'}>Deliver Project</h3>
                                <p className={'h3'}>Deliver the final product on time and with the approval of the client.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}