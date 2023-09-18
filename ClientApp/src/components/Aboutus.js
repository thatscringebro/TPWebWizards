import React from 'react';

function AboutUs() {
    const Membres = [
        {
            name: 'Merlin Gélinas',
            role: '',
            imgageSrc: '/'
        },
        {
            name: 'Mathieu Duval',
            role: '',
            imgageSrc: '/'
        },
        {
            name: 'Gabriel Bruneau',
            role: '',
            imgageSrc: '/'
        },
        {
            name: 'Kyle Lussier',
            role: '',
            imgageSrc: '/'
        },
        {
            name: 'Thomas-Alexandre Barrette',
            role: '',
            imgageSrc: '/'
        },
        {
            name: 'Claudel D. Roy',
            role: '',
            imgageSrc: '/'
        },


    ];



    return (
       
        <div>
            <h1>About Us</h1>
            <p>Welcome to our company's About Us page. We are...</p>

            <div className="team">
                {Membres.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.imageSrc} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  
}

export default AboutUs;