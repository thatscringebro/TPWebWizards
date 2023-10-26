
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { API_BASE_URL } from './utils/config';
import ProductList from './ProductList';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/Fonts.css';
import '../styles/ProductGallery.css';

const fetchDataForCategory = () => {
    return axios.get(`${API_BASE_URL}/album/all`)
        .then(async (response) => {
            if (response.status === 200) {
                const albums = response.data;
                const albumPromises = albums.map(async (album) => {
                    return {
                        id: album.albumId,
                        cover: album.imageFilePath,
                        media: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                        artistName: album.artistName,
                        albumTitle: album.title,
                        category: album.category === 0 ? "used" : "new",
                        price: album.price.toFixed(2),
                        stockQuantity: album.stockQuantity
                    };
                });

                return Promise.all(albumPromises);
            } else {
                throw new Error(`Failed to fetch albums with status: ${response.status}`);
            }
        });
};

function ProductGallery() {
    const location = useLocation();
    //const searchParams = new URLSearchParams(location.search);

    const [allProducts, setAllProducts] = useState([]); // Liste complète des produits
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSortOption, setSelectedSortOption] = useState('default');
    const [selectedCategoryFilterOption, setSelectedCategoryFilterOption] = useState('default');
    const [selectedTypeFilterOption, setSelectedTypeFilterOption] = useState('default');

    const productsPerPage = 12;

    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
    }

    useEffect(() => {
        fetchDataForCategory().then((data) => {
            setAllProducts(data); // Stockez la liste complète
            setProducts(data); // Initialisez également les produits affichés

            // Check for URL parameters and apply filters
            //const category = searchParams.get('category').toLowerCase();
            //const mediatype = searchParams.get('mediatype').toLowerCase() === "vinyl" ? 'CDBase.png' : 'VinylBase.png';

            //console.log(category, mediatype);

            //if (category || mediatype) {
            //    let filteredProducts = [...data];

            //    if (category && category !== 'default') {
            //        filteredProducts = filteredProducts.filter((product) => product.category === category);
            //    }

            //    if (mediatype && mediatype !== 'default') {
            //        filteredProducts = filteredProducts.filter((product) => product.mediaType === mediatype);
            //    }

            //    setProducts(filteredProducts);
            //}
        });
    }, [location.search]);

    //filtering
    let filteredProducts = [...allProducts]; // Copiez la liste complète pour appliquer les filtres

    if (selectedCategoryFilterOption === 'newOnly') {
        filteredProducts = filteredProducts.filter((product) => product.category === 'new');
    } else if (selectedCategoryFilterOption === 'usedOnly') {
        filteredProducts = filteredProducts.filter((product) => product.category === 'used');
    }

    if (selectedTypeFilterOption === 'cdOnly') {
        filteredProducts = filteredProducts.filter((product) => product.mediaType === 'CDBase.png');
    } else if (selectedTypeFilterOption === 'vinylOnly') {
        filteredProducts = filteredProducts.filter((product) => product.mediaType === 'VinylBase.png');
    }

    //sorting
    const sortedProducts = [...filteredProducts];
    if (selectedSortOption === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === 'AlbumNameAsc') {
        sortedProducts.sort((a, b) => a.albumTitle.localeCompare(b.albumTitle));
    } else if (selectedSortOption === 'AlbumNameDesc') {
        sortedProducts.sort((a, b) => -1 * a.albumTitle.localeCompare(b.albumTitle));
    } else if (selectedSortOption === 'ArtistNameAsc') {
        sortedProducts.sort((a, b) => a.artistName.localeCompare(b.artistName));
    } else if (selectedSortOption === 'ArtistNameDesc') {
        sortedProducts.sort((a, b) => -1 * a.artistName.localeCompare(b.artistName));
    }

    const handleTypeFilterChange = (event) => {
        console.log("handle_type: :" + event.target.value);
        setSelectedTypeFilterOption(event.target.value);
        setProducts(filteredProducts);
    };
    const handleCategoryFilterChange = (event) => {
        console.log("handle_cat: :" + event.target.value);
        setSelectedCategoryFilterOption(event.target.value);
        setProducts(filteredProducts);
    };
    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) { setCurrentPage(currentPage - 1); }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <h1>All products</h1>
            </div>
            <div id="filters">
                <div className="col-md left">
                    <div className="sort-bar">
                        <label htmlFor="sortDropdown">Sort by: </label>
                        <select id="sortDropdown" value={selectedSortOption} onChange={handleSortChange}>
                            <option value="default">Default</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="AlbumNameAsc">Album Name: A..Z</option>
                            <option value="AlbumNameDesc">Album Name: Z..A</option>
                            <option value="ArtistNameAsc">Artist Name: A..Z</option>
                            <option value="ArtistNameDesc">Artis Name: Z..A</option>
                        </select>
                    </div>
                </div>
                <div className="col-md right">
                    <div className="row">
                        <div className="filter-bar">
                            <label htmlFor="filterDropdown">Filter by media type: </label>
                            <select id="filterDropdown" value={selectedTypeFilterOption} onChange={handleTypeFilterChange}>
                                <option value="default">Default</option>
                                <option value="cdOnly">CD Only</option>
                                <option value="vinylOnly">Vinyl Only</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filter-bar">
                            <label htmlFor="filterDropdown">Filter by Condition: </label>
                            <select id="filterDropdown" value={selectedCategoryFilterOption} onChange={handleCategoryFilterChange}>
                                <option value="default">Default</option>
                                <option value="newOnly">New Only</option>
                                <option value="usedOnly">Used Only</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ProductList title="All products" products={currentProducts} />
                <div className="pagination">
                    <button className="page-button" onClick={prevPage}>Previous</button>
                    <button className="page-button" onClick={nextPage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default ProductGallery;
