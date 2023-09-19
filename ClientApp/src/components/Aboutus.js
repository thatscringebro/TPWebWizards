﻿import React from 'react';
import './AboutUs.css';
import MapContainer from './GoogleMap';
import AddressInfo from './AddressInfo';
function AboutUs() {
    const Membres = [
        {
            name: 'Merlin Gélinas',
            role: 'OpenSource Master',
            imageSrc: './PhotoAboutUs/184.png',
            UniqueText: 'Bringing technical expertise to our projects.'
        },
        {
            name: 'Mathieu Duval',
            role: 'Speaker Crasher',
            imageSrc: './PhotoAboutUs/300.png',
            UniqueText: 'Committed to teamwork and collaboration.'
        },
        {
            name: 'Gabriel Bruneau',
            role: 'PhotoShop Doctor',
            imageSrc: './PhotoAboutUs/312.png',
            UniqueText: 'A creative thinker and problem solver.'
        },
        {
            name: 'Kyle Lussier',
            role: 'Gym Leader',
            imageSrc: './PhotoAboutUs/431.png',
            UniqueText: 'Passionate about innovation and leadership.'
        },
        {
            name: 'Thomas-Alexandre Barrette',
            role: 'Master Crafter',
            imageSrc: './PhotoAboutUs/494.png',
            UniqueText: 'Dedicated to excellence in every endeavor.'
        },
        {
            name: 'Claudel D. Roy',
            role: 'Woman',
            imageSrc: './PhotoAboutUs/573.png',
            UniqueText: 'Bringing fresh ideas to the table.'
        },


    ];



    return (
       
        <div>
            <h1>About Us</h1>
            <p>Welcome to our company's About Us page. We are...</p>
            <div className="team">
                {Membres.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={process.env.PUBLIC_URL + member.imageSrc } alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                        <p>{member.UniqueText}</p>
                    </div>
                ))}
            </div>
            <div className="Display" >

                <MapContainer />
                <AddressInfo />
            </div>
           
        </div>
    );
  
}

export default AboutUs;