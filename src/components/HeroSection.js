import React, { Component } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typical from 'react-typical';

export default class HeroSection extends Component {
    state: {
        display: 1
    }

    changePage = (e) => {
        this.setState({ display: e })
    }

    render() {
        return (
            <div className='hero-container'>
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
                    {/*<Button*/}
                    {/*    className='btns'*/}
                    {/*    buttonStyle='btn--primary'*/}
                    {/*    buttonSize='btn--large'*/}
                    {/*    onClick={console.log('hey')}*/}
                    {/*>*/}
                    {/*    View My Work &nbsp;<i className="fas fa-binoculars"></i>*/}
                    {/*</Button>*/}
                </div>
            </div>
        );
    }
}