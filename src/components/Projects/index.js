import React from 'react';
import Icon0 from '../../images/svg-0.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';


import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP,
    Button,
    BtnWrap
} from './ProjectsElements';

const Projects = ({
    buttonLabel,
    primary,
    dark,
    dark2 }) => {
    console.log(primary);

    const horseAppDemo = () => {
        window.open('https://thawing-castle-38718.herokuapp.com/')
    };

    const horseAppCode = () => {
        window.open('https://github.com/Martynacodes/EquestrianVacations')
    };

    const pricingPanelDemo = () => {
        window.open('https://cerulean-sprinkles-ac50b9.netlify.app/')
    };


    const pricingPanelCode = () => {
        window.open('https://github.com/Martynacodes/PricingPanel')
    };

    const scoreKeeperDemo = () => {
        window.open('https://steady-griffin-2ff41b.netlify.app/')
    };

    const scoreKeeperCode = () => {
        window.open('https://github.com/Martynacodes/ScoreKeeper')
    };

    const myPortfolioDemo = () => {
        window.open('https://www.martynacodes.com/')
    };

    const myPortfolioCode = () => {
        window.open('https://github.com/Martynacodes/myreactportfolio')
    };


    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
        <ProjectsCard>
                    <ProjectsIcon src={Icon0} />
                    <ProjectsH2> React To Do List</ProjectsH2>
                    <ProjectsP>
                        Add, edit, filter and delete tasks. Mark tasks as complete without deleting them.

                    </ProjectsP>
                    <BtnWrap>
                        <Button
                            onClick={horseAppDemo}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Demo
                        </Button>
                        <Button
                            onClick={horseAppCode}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Code
                        </Button>
                    </BtnWrap>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Full Stack Equestrian App</ProjectsH2>
                    <ProjectsP>
                        Search, book and review horsecamps around the US.
                        Built with JS, Node, Express and MongoDB.
                    </ProjectsP>
                    <BtnWrap>
                        <Button
                            onClick={horseAppDemo}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Demo
                        </Button>
                        <Button
                            onClick={horseAppCode}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Code
                        </Button>
                    </BtnWrap>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon5} />
                    <ProjectsH2>Score Keeper</ProjectsH2>
                    <ProjectsP>
                        A score keeper widget for ping pong or any other twwo player game. Built with JS, Node.js, Bulma.
                    </ProjectsP>
                    <BtnWrap>
                        <Button
                            onClick={scoreKeeperDemo}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Demo
                        </Button>
                        <Button
                            onClick={scoreKeeperCode}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Code
                        </Button>
                    </BtnWrap>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon6} />
                    <ProjectsH2>My Portfolio Page</ProjectsH2>
                    <ProjectsP>
                        My very own portfolio created with React.js, React Router, Smooth Scroll and Styled Components.
                    </ProjectsP>
                    <BtnWrap>
                        <Button
                            onClick={myPortfolioDemo}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Demo
                        </Button>
                        <Button
                            onclick={myPortfolioCode}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Code
                        </Button>
                    </BtnWrap>
                </ProjectsCard>
    
 <ProjectsCard>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Responsive Pricing Panel</ProjectsH2>
                    <ProjectsP>
                        A responsive design business pricing panel project using CSS, Flexbox and HTML.
                    </ProjectsP>
                    <BtnWrap>
                        <Button
                            onClick={pricingPanelDemo}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Demo
                        </Button>
                        <Button
                            onClick={pricingPanelCode}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                        >
                            Code
                        </Button>
                    </BtnWrap>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
};

export default Projects;
