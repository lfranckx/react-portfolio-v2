import React, {Component} from "react";
import './Resume.css';

export default class extends Component {
    state = {
        open: true
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <div className={'resume-head'}>
                    <h1>Lachlan Franckx</h1>
                    <h2>Full-stack Developer</h2>
                </div>
                <div className={'resume-contact'}>
                    <div className={'contact-item'}>
                        <p>Los Angeles, CA</p>
                        <a href={'https://github.com/lfranckx'}><i className="fab fa-github" />&nbsp; /lfranckx</a>
                    </div>
                    <div className={'contact-item'}>
                        <p>(408)499-2830</p>
                        <a href={'https://www.linkedin.com/in/lachlanfranckx/'}><i className="fab fa-linkedin" />&nbsp; /lachlanfranckx</a>
                    </div>
                    <div className={'contact-item'}>
                        <a href={'mailto: lfranckx@gmail.com'}>
                            <i className="fas fa-envelope" />&nbsp; lfranckx@gmail.com
                        </a>
                        <a>
                            <i className="fab fa-facebook-f" />&nbsp; /lfranckx
                        </a>
                    </div>
                </div>
                <div className={'resume-projects'}>
                    
                </div>
            </>
        )
    }
}