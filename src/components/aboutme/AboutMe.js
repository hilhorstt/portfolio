import React from 'react';
import styles from './AboutMe.scss';

const AboutMe = React.createClass({
    render() {
        return (
            <div className={styles.aboutMe}>
                <div className="leftPane">
                    <h3>About me</h3>
                    <p>I aim to combine design and technology from concept to realisation. As an architecture graduate of the Technical University of Delft, I wrote my master thesis on modular building systems, sustainable materials and building transformation, but got 'slightly sidetracked' by web development.</p>
                    <p>In parallel to my studies, I often worked on web development projects for committees, part-time jobs and -just for- fun. I pursued a career in software engineering combining my design skills and front-end development experience.</p>
                    <p>I enjoy discussing UX concepts, visual designs and the latest trends on front-end development</p>
                    <p>Find me on <a href="https://www.linkedin.com/in/timhilhorst" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
                <div className="rightPane" />
            </div>
        );
    },
});

export default AboutMe;
