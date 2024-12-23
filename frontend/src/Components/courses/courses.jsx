import React from 'react';
import { NavLink } from 'react-router-dom';
import './courses.css';

const Courses = () => {
    const coursesOptions = [
        {id: '1',path: '/computer', img: 'https://static.vecteezy.com/system/resources/previews/000/180/384/non_2x/software-engineers-work-at-home-vector.jpg', text: 'Computer Engineering'},
        {id: '2',path: '/it', img: 'https://as2.ftcdn.net/v2/jpg/08/15/68/63/1000_F_815686337_4o16bNn8xXFRpc53yIHBFSaRBig4Vi5P.jpg', text: 'Information Technology'},
        {id: '3',path: '/ai', img: 'https://www.shutterstock.com/shutterstock/photos/2428008911/display_1500/stock-vector-artificial-intelligence-concept-ai-chip-machine-learning-analysis-information-with-lightbulb-2428008911.jpg', text: 'Artificial Intelligence'},
        {id: '4',path: '/entc', img: 'https://www.shutterstock.com/shutterstock/photos/2268579663/display_1500/stock-vector-electronic-manufacturing-components-circuit-engineering-design-coordinate-symbols-concept-isometric-2268579663.jpg', text: 'Electronics Engineering'},
        {id: '5',path: '/electrical', img: 'https://www.shutterstock.com/shutterstock/photos/2461831161/display_1500/stock-vector-industrial-gear-and-electric-lightning-design-logo-industrial-engineering-technology-servo-motor-2461831161.jpg', text: 'Electrical Engineering'},
        {id: '6',path: '/mechanical', img: 'https://www.shutterstock.com/shutterstock/photos/2483196289/display_1500/stock-vector-engineering-idea-concept-innovation-invention-and-solution-metaphor-light-bulb-with-gears-vector-2483196289.jpg', text: 'Mechanical Engineering'},
        {id: '7',path: '/civil', img: 'https://as1.ftcdn.net/v2/jpg/09/13/60/14/1000_F_913601475_3GYrFUT0LvvlnKCfHM9Ge3jbfI5Ocnxe.jpg', text: 'Civil Engineering'}
    ];

    return (
        <div className='courses-container'>
            <ul className="courses-options">
                {coursesOptions.map((option, index) => (
                    <NavLink
                        id={option.id}
                        key={index}
                        to={option.path}
                        className="course-link"
                    >
                        <div className='course-option'>
                            <img src={option.img} alt={option.text} className='image' />
                            <div>
                                <h3>{option.text}</h3>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
