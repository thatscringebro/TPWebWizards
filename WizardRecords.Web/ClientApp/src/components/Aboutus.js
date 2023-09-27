import React from 'react';
import GoogleMapComponent from './GoogleMap';
import AddressInfo from './AddressInfo';
import '../styles/AboutUs.css';

function AboutUs() {
    const Membres = [
        {
            name: 'Merlin Gélinas',
            role: 'OpenSource Master',
            imageSrc: '../Images/AboutUs/184.png',
            UniqueText: 'Bringing technical expertise to our projects.'
        },
        {
            name: 'Mathieu Duval',
            role: 'Speaker Crasher',
            imageSrc: '../Images/AboutUs/300.png',
            UniqueText: 'Committed to teamwork and collaboration.'
        },
        {
            name: 'Gabriel Bruneau',
            role: 'PhotoShop Doctor',
            imageSrc: '../Images/AboutUs/312.png',
            UniqueText: 'A creative thinker and problem solver.'
        },
        {
            name: 'Kyle Lussier',
            role: 'Gym Leader',
            imageSrc: '../Images/AboutUs/431.png',
            UniqueText: 'Passionate about innovation and leadership.'
        },
        {
            name: 'Thomas-Alexandre Barrette',
            role: 'Master Crafter',
            imageSrc: '../Images/AboutUs/494.png',
            UniqueText: 'Dedicated to excellence in every endeavor.'
        },
        {
            name: 'Claudel D. Roy',
            role: 'Woman',
            imageSrc: '../Images/AboutUs/573.png',
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

                <GoogleMapComponent />
                <AddressInfo />
            </div>
        </div>
    );
}

export default AboutUs;