import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from './utils/config';
import ProductList from './ProductList';
import axios from 'axios';
import '../styles/ProductGallery.css';
import { useNavigate } from 'react-router-dom';

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

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else if (currentPage <= 5) {
        pageNumbers.push(1, 2, 3, 4, 5, '...', totalPages);
    } else if (currentPage >= totalPages - 4) {
        pageNumbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
        pageNumbers.push(1, '...', currentPage - 2, currentPage - 1, currentPage, currentPage + 1,currentPage + 2, '...', totalPages);
    }

    const renderPageNumbers = () => {
        return pageNumbers.map((pageNumber, index) => {
            if (pageNumber === '...') {
                return <span key={index}>...</span>;
            } else {
                return (
                    <span
                        key={index}
                        className={`page-number ${pageNumber === currentPage ? 'current-page' : ''}`}
                        onClick={() => {
                            if (pageNumber !== '...') {
                                setCurrentPage(pageNumber);
                            }
                        }}
                    >
                        {pageNumber}
                    </span>
                );
            }
        });
    };

    return (
        <div className="page-numbers">
            {renderPageNumbers()}
        </div>
    );
}



function ProductGallery() {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSortOption, setSelectedSortOption] = useState('default');
    const [selectedCategoryFilterOption, setSelectedCategoryFilterOption] = useState('default');
    const [selectedTypeFilterOption, setSelectedTypeFilterOption] = useState('default');
    
    const productsPerPage = 12;
    
    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        setCurrentPage(1);
        updateUrl(selectedCategoryFilterOption, selectedTypeFilterOption, event.target.value);
    }

    useEffect(() => {
        fetchDataForCategory().then((data) => {
            setAllProducts(data); 


            const urlSearchParams = new URLSearchParams(window.location.search);
            const categoryParam = urlSearchParams.get('category');
            const mediaParam = urlSearchParams.get('media');
            const sortParam = urlSearchParams.get('sort');
            
            if (sortParam && sortParam !== 'default') {
                setSelectedSortOption(sortParam);
            } else {
                setSelectedSortOption('default');
            }




         if (categoryParam && categoryParam !== 'default') {

             if(categoryParam === 'New' || categoryParam === 'newOnly'){
                setSelectedCategoryFilterOption('newOnly');
             }
            else if(categoryParam === 'Used' || categoryParam === 'usedOnly'){
                setSelectedCategoryFilterOption('usedOnly');
             }
            } else {
                setSelectedCategoryFilterOption('default');
            }
        if (mediaParam && mediaParam !== 'default') {
            if(mediaParam === 'Vinyl' || mediaParam === 'vinylOnly'){
                 setSelectedTypeFilterOption('vinylOnly');
            }
            else if(mediaParam === 'CDs' || mediaParam === 'cdOnly'){
                setSelectedTypeFilterOption('cdOnly');
            }
        } else {
             setSelectedTypeFilterOption('default');
        }

        setProducts(data);  
        });
      }, []);

      useEffect(() => {
        // Effect to handle URL changes (e.g., browser back button)
        const handleUrlChange = () => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const categoryParam = urlSearchParams.get('category');
            const mediaParam = urlSearchParams.get('media');
            const sortParam = urlSearchParams.get('sort');

            if (categoryParam && categoryParam !== 'default') {
                setSelectedCategoryFilterOption(categoryParam);
            } else {
                setSelectedCategoryFilterOption('default');
            }

            if (mediaParam && mediaParam !== 'default') {
                setSelectedTypeFilterOption(mediaParam);
            } else {
                setSelectedTypeFilterOption('default');
            }

            if (sortParam && sortParam !== 'default') {
                setSelectedSortOption(sortParam);
            } else {
                setSelectedSortOption('default');
            }
        };

        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, []);


   
    // Filters
    let filteredProducts = [...allProducts];
    if (selectedCategoryFilterOption === 'newOnly') {
        filteredProducts = filteredProducts.filter((product) => product.isUsed === false);
    } else if (selectedCategoryFilterOption === 'usedOnly') {
        filteredProducts = filteredProducts.filter((product) => product.isUsed === true);
    }
    if (selectedTypeFilterOption === 'cdOnly' ) {
        filteredProducts = filteredProducts.filter((product) => product.media === 'CDBase.png');
    } else if (selectedTypeFilterOption === 'vinylOnly') {
        filteredProducts = filteredProducts.filter((product) => product.media === 'VinylBase.png');
    }

  

    // Sorts
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
        updateUrl(selectedCategoryFilterOption, event.target.value);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const handleCategoryFilterChange = (event) => {
        console.log("handle_cat: :" + event.target.value);
        setSelectedCategoryFilterOption(event.target.value);
        updateUrl(event.target.value, selectedTypeFilterOption);
        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if(currentPage >= Math.ceil(sortedProducts.length / productsPerPage)){
            setCurrentPage(Math.ceil(sortedProducts.length / productsPerPage));
        }
        else if (currentPage < Math.ceil(products.length / productsPerPage)) {
                    setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) { setCurrentPage(currentPage - 1); }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const updateUrl = (category, media, sort) => {
        const urlParams = new URLSearchParams();

        if (category !== 'default') {
            urlParams.set('category', category);
        }

        if (media !== 'default') {
            urlParams.set('media', media);
        }
        if (sort !== 'default') {
            urlParams.set('sort', sort);
        }

        navigate(`?${urlParams.toString()}`);
    };



    return (
        <div>
            <div className="section-category">
                <h1>All products</h1>
            </div>
            <div className="filters">
                <div className="row">
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
                </div>
                <div className="col-md right">
                <div className="filter-bar">
                        <label htmlFor="filterDropdown">Filter by Format: </label>
                        <select id="filterDropdown" value={selectedTypeFilterOption} onChange={handleTypeFilterChange}>
                            <option value="default">Default</option>
                            <option value="cdOnly">CD Only</option>
                            <option value="vinylOnly">Vinyl Only</option>
                        </select>
                    </div>
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
            <div>
                <ProductList title="All products" products={currentProducts} isHomeGallery={false}/>
                <div className="pagination">
                    <button className="page-button" onClick={prevPage}>Previous</button>
                    {generatePageNumbers(Math.ceil(sortedProducts.length / productsPerPage), currentPage, setCurrentPage)}
                    <button className="page-button" onClick={nextPage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default ProductGallery;