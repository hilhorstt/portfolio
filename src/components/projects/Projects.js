import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './Projects.scss';

const projectData = [
    {
        title: 'Freelance front-end Developer - Variance',
        description: 'Web application development with focus on web accessibility and UX design. Current available part-time.',
        date: '09/2019 - to date',
        id: '001',
    }, {
        title: 'Front-end Developer - Inspera Assessment AS (full time)',
        description: 'Coding and designing Inspera’s assessment solutions for the educational sector in a range from bleeding edge front-end technologies to libraries and frameworks from the good ’ol days. My focus has been to develop new features for the digital exam platform with WCAG standards in mind.',
        date: '11/2015 - 06/2019',
        id: '002',
    }, {
        title: 'Scrum Master, Front-end Developer - Cognizant Technology Services (full time)',
        description: 'Developing features, portlets and the responsive redesign of a corporate banking website. As a scrum master, I worked closely with UX designers, business analysts and content managers. The latest project was an AngularJS chat application.',
        date: '09/2013 - 11/2015',
        id: '003',
    }, {
        title: 'Team Leader PR, Communications and Acquisitions - TU Delft ReVolt House (fulltime)',
        description: 'The design and build of a fully functional solar powered home for the university competition Solar Decathlon Europe 2012. Representing TU Delft, I was responsible for PR, communications and sponsorship.',
        date: '09/2010 - 09/2013',
        id: '004',
    }, {
        title: 'Junior Web developer / SEO Specialist - QuelMediA (12 hours per week)',
        description: 'QuelMediA specialized in search engine marketing, search engine optimization as well as search engine advertising. I worked on search engine optimization, and the design and development of landing pages and WordPress websites.',
        date: '09/2010 - 09/2013',
        id: '005',
    },
];

class ProjectItem extends React.PureComponent {
    static propTypes = {
        project: PropTypes.object.isRequired,
    };

    render() {
        const { project } = this.props;
        return (
            <div className={styles.project}>
                <div className="header">
                    <div className="title"><h4>{project.title}</h4></div>
                    <div className="date">{project.date}</div>
                </div>
                <div className="body">{project.description}</div>
            </div>
        );
    }
}


class Projects extends React.PureComponent {
    static propTypes = {
        amountInView: PropTypes.number.isRequired,
    };

    render() {
        const { amountInView } = this.props;
        const projects = projectData.slice(0, amountInView);
        const projectComponents = projects.map((project) => (
            <ProjectItem project={project} key={project.id} />
        ));
        return (
            <div className={styles.projects}>
                <CSSTransitionGroup
                    transitionName="project"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear
                    transitionAppearTimeout={500}
                >
                    {projectComponents}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Projects;
