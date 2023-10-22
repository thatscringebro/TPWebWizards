import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { API_BASE_URL } from './utils/config';
import Gallery from './Gallery.jsx';
import axios from 'axios';



function HomeGallery() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newVinyl, setNewVinyl] = useState([]);
    const [newCDs, setNewCDs] = useState([]);
    const [usedVinyl, setUsedVinyl] = useState([]);
    const [usedCDs, setUsedCDs] = useState([]);

    const fetchDataForCategory = (count, media = null, isUsed = null) => {
        const params = {};
        if (media !== null) params.media = media;
        if (isUsed !== null) params.isUsed = isUsed;

        const albumPromises = Array.from({ length: count }).map(() =>
        axios.get(`${API_BASE_URL}/album/random`, { params })
                .then((response) => {
                        if (response.status === 200) {
                            const album = response.data;
    
                            return {
                                id: album.albumId,
                                cover: album.imageFilePath,
                                media: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                                artistName: album.artistName,
                                albumTitle: album.title,
                                price: album.price.toFixed(2),
                                category : album.category,
                            };
                        }
                        else {
                            throw new Error(`Failed to fetch random album with status: ${response.status}`);
                        }
                    })
        );
    
        return Promise.all(albumPromises);
    };

    useEffect(() => {
        fetchDataForCategory(3)
            .then((data) => setFeaturedProducts(data));
        fetchDataForCategory(3, 'Vinyl', false)
            .then((data) => setNewVinyl(data));
        fetchDataForCategory(3, 'CD', false)
            .then((data) => setNewCDs(data));
        fetchDataForCategory(3, 'Vinyl', true)
            .then((data) => setUsedVinyl(data));
        fetchDataForCategory(3, 'CD', true)
            .then((data) => setUsedCDs(data));
    }, []);

    return (
        <div>
            <hr className="divider" />
            <Gallery title="Featured Products" products={featuredProducts} />
            <hr className="divider" />
            <Gallery title="New Vinyl" products={newVinyl} />
            <hr className="divider" />
            <Gallery title="New CDs" products={newCDs} />
            <hr className="divider" />
            <Gallery title="Used Vinyl" products={usedVinyl} />
            <hr className="divider" />
            <Gallery title="Used CDs" products={usedCDs} />
            <hr className="divider" />
        </div>
    );
}

export default HomeGallery;