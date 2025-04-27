import React from 'react';
import '../assets/styles/sidebar.scss';
import SportIcon from './SportIcon.jsx';
import yogaIcon from '../assets/images/yoga.svg';
import swimIcon from '../assets/images/swiming.svg';
import bikeIcon from '../assets/images/cycling.svg';
import muscleIcon from '../assets/images/bodybuilding.svg';

function Sidebar() {
    return (
        <div className='App-sidebar'>
            <div className='sport-icons'>
                <SportIcon src={yogaIcon} alt="Yoga" />
                <SportIcon src={swimIcon} alt="Natation" />
                <SportIcon src={bikeIcon} alt="Vélo" />
                <SportIcon src={muscleIcon} alt="Musculation" />
            </div>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;
