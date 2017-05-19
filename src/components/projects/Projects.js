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
        description: 'Seconded to the largest financial services provider in the Netherlands, I have been part of several scrum teams creating features, portlets and the responsive redesign of the corporate website. All projects required close collaboration with the scrum team, visual and UX designers, business analysts and content managers. Currently I am the scrum master for a team which develops apps/features for the bank\'s redesigned, cutting-edge framework.',
        date: '09/2013 - 11/2015',
        id: '002',
    }, {
        title: 'Team Leader PR, Communications and Acquisitions - TU Delft ReVolt House (fulltime)',
        description: 'A project which involved the design and build of a fully functional solar powered home for the prestigious student competition Solar Decathlon Europe 2012. For this TU Delft dream team I was in charge of PR, communications and sponsorship, which involved many negotiations with university, research institutions, government and (building) companies.',
        date: '09/2010 - 09/2013',
        id: '003',
    }, {
        title: 'Junior Webdeveloper / SEO Specialist - QuelMediA (12 hours per week)',
        description: 'Quel brings suppliers and purchasing organization in contact with eachother that are looking for products or services in Google. QuelMediA specializes in search engine marketing, search engine optimization as well as search engine advertising.',
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
                <div className="body"><p>{project.description}</p></div>
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
