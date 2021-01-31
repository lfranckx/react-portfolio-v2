import React from "react";
import '../../../styles/Process.css';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default (props) => {
    return (
        <div id={'process'}>
            <section className={'text-center padY2 new-container'}>
                <h2 >My Creative Process</h2>
                <div className={'bottom-line'}></div>
                <p className={'lead'}>I start with figuring out what the customer wants their application to do and how they want it to look.</p>
                <div id={'timeline'}>
                    <ul>
                        <li>
                            <ScrollAnimation
                                animateIn={'animate__fadeInRightBig'}
                                offset={'150'}
                                duration={1}
                                animationOnce={true}
                            >
                                <div>
                                    <h3><GiTalk /></h3>
                                </div>
                            </ScrollAnimation>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}