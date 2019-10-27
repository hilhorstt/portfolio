import React from 'react';

import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './AboutMe.scss';

class AboutMe extends React.PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };

    render() {
        const { t } = this.props;
        return (
            <div className={styles.aboutMe}>
                <div className="leftPane">
                    <h3>{t('aboutMe')}</h3>
                    <p>
                        {t('aboutMePara1')}
                    </p>
                    <p>
                        {t('aboutMePara2')}
                    </p>
                    <p>
                        {t('aboutMePara3')}
                    </p>
                    <p>
                        <span>
                            {t('findMeOn')}
                            &nbsp;
                        </span>
                        <a href="https://www.linkedin.com/in/timhilhorst" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
                <div className="rightPane" />
            </div>
        );
    }
}

export default withTranslation()(AboutMe);
