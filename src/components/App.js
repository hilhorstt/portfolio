import React from 'react';
import Parallax from 'react-springy-parallax';
import Typist from 'react-typist';
import Waypoint from 'react-waypoint';
import AboutMe from './aboutme/AboutMe';
import styles from './App.scss';

const App = React.createClass({
    getInitialState() {
        return {
            isInView: false,
        };
    },
    _handleWaypointEnter() {
        setTimeout(() => {
            this.setState({ isInView: true });
        }, 500);
    },
    _handleWaypointLeave() {
        this.setState({ isInView: false });
    },
    render() {
        const cursorOptions = {
            show: false,
        };
        return (
            <Parallax ref="parallax" pages={3}>
                <Parallax.Layer offset={0} speed={1} className={styles.front} />
                <Parallax.Layer offset={1} speed={1} className={styles.endorsement} />
                <Parallax.Layer offset={2} speed={1} className={styles.contact} />
                <Parallax.Layer
                    // Page offset, or where the layer will be at when scrolled to
                    // 0 means start, 1 second page, 1.5 second and half, and so on ...
                    offset={0}
                    // Parallax factor, allows for positive and negative values
                    // Shifts the layer up or down in accordance to its offset
                    speed={0.15}
                    className={styles.layer}
                >
                    <div>
                        <div>
                            <Typist
                                className={styles.welcome}
                                startDelay={1000}
                                cursor={cursorOptions}
                            >
                                Hi, I'm Tim!
                            </Typist>
                        </div>
                        <div>
                            <Typist
                                className={styles.title}
                                startDelay={3000}
                                cursor={cursorOptions}
                            >
                                I design and build front-end applications.
                            </Typist>
                        </div>
                        <div className={styles.logo} />
                    </div>
                </Parallax.Layer>
                <Parallax.Layer
                    // Page offset, or where the layer will be at when scrolled to
                    // 0 means start, 1 second page, 1.5 second and half, and so on ...
                    offset={1}
                    // Parallax factor, allows for positive and negative values
                    // Shifts the layer up or down in accordance to its offset
                    speed={1}
                    className={styles.projectPane}
                >
                    <div className={styles.left}>
                        <h3>Projects</h3>
                    </div>
                    <div className={styles.right}>
                        <Waypoint
                            onEnter={this._handleWaypointEnter}
                            onLeave={this._handleWaypointLeave}>
                            {
                                this.state.isInView ? (
                                    <div>
                                        <div className={styles.project}>
                                            Project 1
                                        </div>
                                        <div className={styles.project}>
                                            Project 2
                                        </div>
                                    </div>
                                )
                                : null
                            }
                        </Waypoint>
                    </div>
                </Parallax.Layer>
                <Parallax.Layer
                    // Page offset, or where the layer will be at when scrolled to
                    // 0 means start, 1 second page, 1.5 second and half, and so on ...
                    offset={1.85}
                    // Parallax factor, allows for positive and negative values
                    // Shifts the layer up or down in accordance to its offset
                    speed={-0.5}
                >
                    <div className={styles.portrait} />
                </Parallax.Layer>
                <Parallax.Layer
                    // Page offset, or where the layer will be at when scrolled to
                    // 0 means start, 1 second page, 1.5 second and half, and so on ...
                    offset={2}
                    // Parallax factor, allows for positive and negative values
                    // Shifts the layer up or down in accordance to its offset
                    speed={0.5}
                    className={styles.layer}
                >
                    <AboutMe />
                </Parallax.Layer>
            </Parallax>
        );
    },
});

export default App;
