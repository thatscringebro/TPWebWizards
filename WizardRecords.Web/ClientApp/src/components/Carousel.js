import React, { useState, useEffect, useCallback } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import '../styles/Carousel.css';

const Carousel = (props) => {
    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = useCallback(() => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex((prevState) => prevState + 1);
        } else {
            setCurrentIndex(0);
        }
    }, [currentIndex, length]);

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        } else {
            setCurrentIndex(length - 1);
        }
    };

    useEffect(() => {
        setLength(children.length)
    }, [children])

    useEffect(() => {
        // Démarrez un intervalle pour changer automatiquement d'image toutes les 10 secondes (10000 ms)
        const interval = setInterval(() => {
            next(); // Appelez la fonction next pour passer à l'image suivante
        }, 7000); // Intervalle de 10 secondes

        // Nettoyez l'intervalle lorsque le composant est démonté
        return () => {
            clearInterval(interval);
        }
    }, [next]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    <BiSolidLeftArrow className="arrow" />
                </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                    <BiSolidRightArrow className="arrow" />
                </button>
            </div>
        </div>
    )
}


export default Carousel