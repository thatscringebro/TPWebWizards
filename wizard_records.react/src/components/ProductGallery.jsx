import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from './utils/config';
import ProductList from './ProductList';
import { ArtistGenre } from './utils/constants';
import axios from 'axios';
import '../styles/ProductGallery.css';

const fetchDataForCategory = () => {
    return axios.get(`${API_BASE_URL}/album/all`)
        .then((response) => {
            if (response.status === 200) {
                const albums = response.data;

                const albumPromises = albums.map((album) => {
                    return {
                        id: album.albumId,
                        cover: album.imageFilePath === "" ? "default.webp" : album.imageFilePath,
                        media: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                        artistName: album.artistName,
                        artistGenre: album.artistGenre,
                        albumTitle: album.title,
                        isUsed: album.isUsed,
                        price: album.price.toFixed(2),
                        quantity: album.quantity
                    };
                });
                return Promise.all(albumPromises);

            } else {
                throw Error(`Failed to fetch albums with status: ${response.status}`);
            }
        });
};

function generatePageNumbers(totalPages, currentPage, setCurrentPage) {
    const pageNumbers = [];

    if (totalPages <= 1) {
        return null;
    }

    pageNumbers.push(1);

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 4) {
        startPage = 2;
        endPage = Math.min(5, totalPages - 1);
    }

    if (totalPages < 5) {
        endPage = totalPages - 1;
    }

    const showStartEllipsis = startPage > 2;
    const showEndEllipsis = endPage < totalPages - 1;

    if (showStartEllipsis) {
        pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (showEndEllipsis) {
        pageNumbers.push('...');
    }

    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
        pageNumbers.push(totalPages);
    }

    const renderPageNumbers = pageNumbers.map((pageNumber, index) => {
        if (pageNumber === '...') {
            return <span key={`ellipsis-${index}`}>...</span>;
        } else {
            const handleClick = pageNumber !== '...' ? () => setCurrentPage(pageNumber) : undefined;
            return (
                <span
                    key={pageNumber}
                    className={`page-number ${pageNumber === currentPage ? 'current-page' : ''}`}
                    onClick={handleClick}
                >
                    {pageNumber}
                </span>
            );
        }
    });

    return (
        <div className="page-numbers">
            {renderPageNumbers}
        </div>
    );
}

function ProductGallery() {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSortOption, setSelectedSortOption] = useState('default');
    const [selectedGenreFilterOption, setSelectedGenreFilterOption] = useState('default');
    const [selectedFormatFilterOption, setSelectedFormatFilterOption] = useState('default');
    const [selectedCategoryFilterOption, setSelectedCategoryFilterOption] = useState('default');
    const [selectedAvailabilityFilterOption, setSelectedAvailabilityFilterOption] = useState('default');
    
    
    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        setCurrentPage(1);
    }

    useEffect(() => {
        fetchDataForCategory().then((data) => {
            setAllProducts(data); 
            setProducts(data);
        });
    }, []);

    // Filters
    let filteredProducts = [...allProducts];

    // Genre filter
    if (selectedGenreFilterOption === 'rock') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 0);
    } else if (selectedGenreFilterOption === 'pop') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 1);
    } else if (selectedGenreFilterOption === 'jazz') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 2);
    } else if (selectedGenreFilterOption === 'hiphop') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 3);
    } else if (selectedGenreFilterOption === 'alternative') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 4);
    } else if (selectedGenreFilterOption === 'classical') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 5);
    } else if (selectedGenreFilterOption === 'francophone') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 6);
    } else if (selectedGenreFilterOption === 'metal') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 7);
    } else if (selectedGenreFilterOption === 'punk') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 8);
    } else if (selectedGenreFilterOption === 'blues') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 9);
    } else if (selectedGenreFilterOption === 'world') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 10);
    } else if (selectedGenreFilterOption === 'folk') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 11);
    }else if (selectedGenreFilterOption === 'country') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 12);
    } else if (selectedGenreFilterOption === 'soul') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 13);
    } else if (selectedGenreFilterOption === 'funk') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 14);
    } else if (selectedGenreFilterOption === 'electronica') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 15);
    } else if (selectedGenreFilterOption === 'soundtrack') {
        filteredProducts = filteredProducts.filter((product) => product.artistGenre === 16);
    }

    // Format filter
    if (selectedFormatFilterOption === 'cdOnly') {
        filteredProducts = filteredProducts.filter((product) => product.media === 'CDBase.png');
    } else if (selectedFormatFilterOption === 'vinylOnly') {
        filteredProducts = filteredProducts.filter((product) => product.media === 'VinylBase.png');
    }

    // Category filter
    if (selectedCategoryFilterOption === 'newOnly') {
        filteredProducts = filteredProducts.filter((product) => product.isUsed === false);
    } else if (selectedCategoryFilterOption === 'usedOnly') {
        filteredProducts = filteredProducts.filter((product) => product.isUsed === true);
    }

    // Availability filter
    if (selectedAvailabilityFilterOption === 'availableOnly') {
        filteredProducts = filteredProducts.filter((product) => product.quantity > 0);
    } else if (selectedAvailabilityFilterOption === 'unavailableOnly') {
        filteredProducts = filteredProducts.filter((product) => product.quantity === 0);
    }

    // Sorting options
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

    const productsPerPage = 12;

    const handleGenreFilterChange = (event) => {
        console.log("handle_genre: :" + event.target.value);
        setSelectedGenreFilterOption(event.target.value);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const handleFormatFilterChange = (event) => {
        console.log("handle_format: :" + event.target.value);
        setSelectedFormatFilterOption(event.target.value);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const handleCategoryFilterChange = (event) => {
        console.log("handle_category: :" + event.target.value);
        setSelectedCategoryFilterOption(event.target.value);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const handleAvailabilityFilterChange = (event) => {
        console.log("handle_availability: :" + event.target.value);
        setSelectedAvailabilityFilterOption(event.target.value);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const nextPage = () => {
        const totalSortedPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalSortedPages) {
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
            <h1>All products</h1>
            <div className="dropdown-container">
                <div className="dropdown-group">
                    <label htmlFor="dropdown-label">SORTING OPTIONS: </label>
                    <select id="dropdown-main" value={selectedSortOption} onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="AlbumNameAsc">Album Name: A..Z</option>
                        <option value="AlbumNameDesc">Album Name: Z..A</option>
                        <option value="ArtistNameAsc">Artist Name: A..Z</option>
                        <option value="ArtistNameDesc">Artist Name: Z..A</option>
                    </select>
                </div>

                <div className="dropdown-group">
                    <label htmlFor="dropdown-label">FILTER BY GENRE: </label>
                    <select id="dropdown-genre" value={selectedGenreFilterOption} onChange={handleGenreFilterChange}>
                    <option value="default">Any genre</option>
                        {ArtistGenre.map((genre) => (
                            <option key={genre.value} value={genre.label.toLowerCase()}>{genre.label}</option>
                        ))}
                </select>
                </div>

                <div className="dropdown-group">
                    <label htmlFor="dropdown-label">FILTER BY FORMAT: </label>
                    <select id="dropdown-media" value={selectedFormatFilterOption} onChange={handleFormatFilterChange}>
                        <option value="default">All formats</option>
                        <option value="cdOnly">CD only</option>
                        <option value="vinylOnly">Vinyl only</option>
                    </select>
                </div>

                <div className="dropdown-group">
                    <label htmlFor="dropdown-label">FILTER BY AVAILABILITY: </label>
                    <select id="dropdown-availability" value={selectedFormatFilterOption} onChange={handleAvailabilityFilterChange}>
                        <option value="default">All</option>
                        <option value="availableOnly">Available only</option>
                        <option value="unavailableOnly">Unavailable only</option>
                    </select>
                </div>

                <div className="dropdown-group">
                    <label htmlFor="dropdown-label">FILTER BY CATEGORY: </label>
                    <select id="dropdown-condition" value={selectedCategoryFilterOption} onChange={handleCategoryFilterChange}>
                        <option value="default">Any category</option>
                        <option value="newOnly">New only</option>
                        <option value="usedOnly">Used only</option>
                    </select>
                </div>
            </div>
            {currentProducts.length > 0 ? (
            <div>
                <ProductList title="All products" products={currentProducts} isHomeGallery={false}/>
                    {Math.ceil(sortedProducts.length / productsPerPage) > 1 && (
                        <div className="pagination">
                            <button 
                                className="page-button" 
                                onClick={prevPage} 
                                disabled={currentPage === 1}>
                                Previous
                            </button>
                            {generatePageNumbers(Math.ceil(sortedProducts.length / productsPerPage), currentPage, setCurrentPage)}
                            <button 
                                className="page-button" 
                                onClick={nextPage} 
                                disabled={currentPage >= Math.ceil(sortedProducts.length / productsPerPage)}>
                                Next
                            </button>
                        </div>
                    )}
                )
            </div>) : (
                <div className="no-results">
                    <h1>No matching results!</h1>
                </div>
            )}
        </div>
    );
}

export default ProductGallery;