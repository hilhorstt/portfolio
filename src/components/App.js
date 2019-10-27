import React from 'react';
import Parallax from 'react-springy-parallax';
import Typist from 'react-typist';
import { Waypoint } from 'react-waypoint';
import AboutMe from './aboutme/AboutMe';
import Projects from './projects/Projects';
import styles from './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountInView: 0,
            menuVisible: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                menuVisible: true,
            });
        }, 6500);
    }

    _handleWaypointEnter() {
        const amountOfProjects = 5;
        for (let index = 0; index < amountOfProjects; index += 1) {
            const timeout = 1000 * index;
            this.incrementNumberWithTimeOut(index, timeout);
        }
    }

    incrementNumberWithTimeOut(index, timeout) {
        const { amountInView } = this.state;
        if (amountInView !== 5) {
            setTimeout(() => {
                this.setState({ amountInView: index + 1 });
            }, timeout);
        }
    }

    _handleWaypointLeave() {
        this.setState({ amountInView: 5 });
    }

    render() {
        const { amountInView, menuVisible } = this.state;
        const cursorOptions = {
            show: false,
        };
        return (
            <div>
                <div className={`${styles.fixedMenu} ${menuVisible ? 'visible' : ''}`}>
                    <ul>
                        <li>
                            <a role="button" href="javascript:void(0)" onClick={() => this.parallax.scrollTo(1)}>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => this.parallax.scrollTo(2)}>
                                <span>About me</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Parallax ref={(element) => { this.parallax = element; }} pages={3}>
                    <Parallax.Layer offset={0} speed={1} className={styles.front} />
                    <Parallax.Layer offset={1} speed={1} className={styles.endorsement} />
                    <Parallax.Layer offset={2} speed={1} className={styles.contact} />

                    <Parallax.Layer
                        offset={0}
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
                                Hi, I&apos;m Tim
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
                        </div>
                    </Parallax.Layer>
                    <Parallax.Layer
                        offset={0.99}
                        speed={1.2}
                    >
                        <div className={styles.logo} />
                    </Parallax.Layer>
                    <Parallax.Layer
                        offset={1}
                        speed={1}
                        className={styles.projectPane}
                    >
                        <div className={styles.left}>
                            <h3>Projects</h3>
                        </div>
                        <div className={styles.right}>
                            <Waypoint
                                onEnter={this._handleWaypointEnter.bind(this)}
                                onLeave={this._handleWaypointLeave.bind(this)}
                            >
                                <div><Projects amountInView={amountInView} /></div>
                            </Waypoint>
                        </div>
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={1.99}
                        speed={0.2}
                    >
                        <div className={styles.portrait} />
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2}
                        speed={0.5}
                        className={styles.layer}
                    >
                        <AboutMe />
                    </Parallax.Layer>
                </Parallax>
            </div>
        );
    }
}

export default App;
