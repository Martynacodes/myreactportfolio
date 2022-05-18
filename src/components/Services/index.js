import React from 'react';
import Icon8 from '../../images/svg-8.svg';
import Icon9 from '../../images/svg-9.svg';
import Icon10 from '../../images/svg-10.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>My Skills</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon8} />
                    <ServicesH2>Front End</ServicesH2>
                    <ServicesP>
                        React, JavaScript, Bootstrap, Flexbox, HTML5, CSS3
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon9} />
                    <ServicesH2>Back End</ServicesH2>
                    <ServicesP>
                        Node.js, Express.js, MongoDB, SQL
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon10} />
                    <ServicesH2>Additional Skills</ServicesH2>
                    <ServicesP>
                        Redux, Testing(Jest), Deployment, Git, Postman
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
