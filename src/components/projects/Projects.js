import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Projects.scss';

const projectData = [
    {
        title: 'Front-end Developer - Inspera Assessment AS (full time)',
        description: 'Coding and designing Inspera’s assessment solutions for the educational sector in a range from bleeding edge front-end technologies to libraries and frameworks from the good ’ol days. My focus has been to develop new features for the digital exam platform with WCAG standards in mind.',
        date: '11/2015 - to date',
        id: '001',
    }, {
        title: 'Scrum Master, Front-end Developer - Cognizant Technology Services (full time)',
        description: 'Developing features, portlets and the responsive redesign of a corporate banking website. As a scrum master, I worked closely with UX designers, business analysts and content managers. The latest project was an AngularJS chat application.',
        date: '09/2013 - 11/2015',
        id: '002',
    }, {
        title: 'Team Leader PR, Communications and Acquisitions - TU Delft ReVolt House (fulltime)',
        description: 'The design and build of a fully functional solar powered home for the university competition Solar Decathlon Europe 2012. Representing TU Delft, I was responsible for PR, communications and sponsorship.',
        date: '09/2010 - 09/2013',
        id: '003',
    }, {
        title: 'Junior Web developer / SEO Specialist - QuelMediA (12 hours per week)',
        description: 'QuelMediA specialized in search engine marketing, search engine optimization as well as search engine advertising. I worked on search engine optimization, and the design and development of landing pages and WordPress websites.',
        date: '09/2010 - 09/2013',
        id: '004',
    },
];

const ProjectItem = React.createClass({
    propTypes: {
        project: React.PropTypes.object,
    },
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
    },
});


const Projects = React.createClass({
    propTypes: {
        amountInView: React.PropTypes.number,
    },
    render() {
        const { amountInView } = this.props;
        const projects = projectData.slice(0,amountInView);
        const projectComponents = projects.map(project => (
            <ProjectItem project={project} key={project.id} />
        ));
        return (
            <div className={styles.projects}>
                <ReactCSSTransitionGroup
                    transitionName="project"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear
                    transitionAppearTimeout={500}
                >
                    {projectComponents}
                </ReactCSSTransitionGroup>
            </div>
    );
    },
});

export default Projects;
