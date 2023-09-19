import React from 'react';
import './AboutUs.css';
function AboutUs() {
    const Membres = [
        {
            name: 'Merlin Gélinas',
            role: 'OpenSource Master',
            imageSrc: './PhotoAboutUs/184.png'
        },
        {
            name: 'Mathieu Duval',
            role: 'Speaker Crasher',
            imageSrc: './PhotoAboutUs/300.png'
        },
        {
            name: 'Gabriel Bruneau',
            role: 'PhotoShop Doctor',
            imageSrc: './PhotoAboutUs/312.png'
        },
        {
            name: 'Kyle Lussier',
            role: 'Gym Leader',
            imageSrc: './PhotoAboutUs/431.png'
        },
        {
            name: 'Thomas-Alexandre Barrette',
            role: 'Master Crafter',
            imageSrc: './PhotoAboutUs/494.png'
        },
        {
            name: 'Claudel D. Roy',
            role: 'Woman',
            imageSrc: './PhotoAboutUs/573.png'
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
                    </div>
                ))}
            </div>
        </div>
    );
  
}

export default AboutUs;