import React from 'react';
import Parallax from 'react-springy-parallax';
import Typist from 'react-typist';
import { Waypoint } from 'react-waypoint';
import { Trans, withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import i18n, { locale } from '../i18n';
import AboutMe from './aboutme/AboutMe';
import Projects from './projects/Projects';
import styles from './App.scss';

class App extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            amountInView: 0,
            menuVisible: false,
            currentLanguage: locale,
            showTypist: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                menuVisible: true,
            });
        }, 6500);
    }

    changeLanguage = (lng) => {
        localStorage.setItem('locale', lng);
        i18n.changeLanguage(lng);
        this.setState({
            currentLanguage: lng,
        });
        this.setState({
            currentLanguage: lng,
            showTypist: false,
        }, () => {
            this.setState({ showTypist: true });
        });
    };

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

    renderLangButtons() {
        const { currentLanguage } = this.state;
        const languages = [
            {
                description: 'Nederlands',
                langCode: 'nl',
                title: 'NL',
            },
            {
                description: 'English',
                langCode: 'en',
                title: 'EN',
            },
            {
                description: 'Norsk',
                langCode: 'nb',
                title: 'NO',
            },
        ];
        return languages.map((lang) => {
            const isCurrent = currentLanguage === lang.langCode;
            return (
                <button
                    type="button"
                    onClick={this.changeLanguage.bind(null, lang.langCode)}
                    aria-label={lang.description}
                    className={isCurrent ? 'active' : ''}
                    aria-current={isCurrent}
                    key={`${lang.langCode}_button`}
                >
                    {lang.title}
                </button>
            );
        });
    }

    render() {
        const { amountInView, menuVisible, showTypist } = this.state;
        const { t } = this.props;
        const cursorOptions = {
            show: false,
        };

        return (
            <div>
                <nav className={`${styles.fixedMenu} ${menuVisible ? 'visible' : ''}`}>
                    <ul>
                        <li>
                            <a role="button" href="javascript:void(0)" onClick={() => this.parallax.scrollTo(1)}>
                                <span>{t('projects')}</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={() => this.parallax.scrollTo(2)}>
                                <span>{t('aboutMe')}</span>
                            </a>
                        </li>
                    </ul>
                    <div className={styles.languagePicker}>
                        {this.renderLangButtons()}
                    </div>
                </nav>
                <Parallax ref={(element) => { this.parallax = element; }} pages={3}>
                    <Parallax.Layer offset={0} speed={1} className={styles.front} />
                    <Parallax.Layer offset={1} speed={1} className={styles.endorsement} />
                    <Parallax.Layer offset={2} speed={1} className={styles.contact} />

                    <Parallax.Layer
                        offset={0}
                        speed={0.15}
                        className={styles.layer}
                    >
                        {
                            showTypist
                                ? (
                                    <div>
                                        <div>
                                            <Typist
                                                className={styles.welcome}
                                                startDelay={1000}
                                                cursor={cursorOptions}
                                            >
                                                {t('splashHeader')}
                                            </Typist>
                                        </div>
                                        <div>
                                            <Typist
                                                className={styles.title}
                                                startDelay={3000}
                                                cursor={cursorOptions}
                                            >
                                                {t('splashSubHeader')}
                                            </Typist>
                                        </div>
                                    </div>
                                )
                                : null
                        }
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
                            <h3><Trans>projects</Trans></h3>
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

export default withTranslation()(App);
