import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Product = ({ product }) => (
    <Col md={4} className="d-flex mb-4">
        <Link to={`/detail/${product.id}`} className="cardHREF card-width">
            <Card className="h-100">
                <CardImg top className="card-img-format" src={require(`./Images/CoverTemplate/${product.format}`)} alt={product.format} />
                <CardImg top className="card-img-cover" src={require(`./Images/AlbumCovers/${product.cover}`)} alt={product.cover} />
                <CardBody className="card-body">
                    <div className="card-info">
                        <CardTitle className="card-artist">{product.artistName}</CardTitle>
                        <CardSubtitle className="card-album">{product.albumTitle}</CardSubtitle>
                    </div>
                    <div className="card-divider"></div>
                    <div className="card-purchase">
                        <CardTitle className="card-price"><b>${product.price}</b></CardTitle>
                        <CardSubtitle className="card-basket">Add to basket</CardSubtitle>
                    </div>
                </CardBody>
            </Card>
        </Link>
    </Col>
);

const ProductList = ({ title, products }) => (
    <section className={`product-list section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <Container>
            <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>{title}</h1>
                <h3><a href={`/product/all`}>Click for more {'->'}</a></h3>
            </div>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

const FeaturedProducts = () => {
    const products = [
        { id: 1, artistName: 'Essenger', albumTitle: 'After Dark', price: '29.99', format: 'CDBase.png', cover: 'essenger_after_dark.jpg' },
        { id: 2, artistName: 'Aversions Crown', albumTitle: 'Tyrant', price: '34.99', format: 'VinylBase.png', cover: 'aversions_crown_tyrant.jpg' },
        { id: 3, artistName: 'Make Them Suffer', albumTitle: 'How To Survive A Funeral', price: '39.99', format: 'VinylBase.png', cover: 'make_them_suffer_how_to_survive_a_funeral.jpg' }

    ];

    return <ProductList title="Featured products" products={products} />;
};

const NewVinyl = () => {
    const products = [
        { id: 1, artistName: 'Gojira', albumTitle: 'L\'Enfant Sauvage', price: '49.99', format: 'VinylBase.png', cover: 'gojira_l_enfant_sauvage.jpg' },
        { id: 2, artistName: 'Nirvana', albumTitle: 'In Utero', price: '44.99', format: 'VinylBase.png', cover: 'nirvana_in_utero.jpg' },
        { id: 3, artistName: 'King Gizzard And The Lizard Wizard', albumTitle: 'PetroDragonic Apocalypse; Or, Dawn Of Eternal Night: An Annihilation Of Planet Earth And The Beginning Of Merciless Damnation', price: '49.99', format: 'VinylBase.png', cover: 'king_gizzard_and_the_lizard_wizard_petradragonic.jpg' }

    ];

    return <ProductList title="New vinyl" products={products} />;
};

const NewCDs = () => {
    const products = [
        { id: 1, artistName: 'Red Hot Chili Peppers', albumTitle: 'Californication', price: '19.99', format: 'CDBase.png', cover: 'red_hot_chili_peppers_californication.jpg' },
        { id: 2, artistName: 'Metallica', albumTitle: 'Masters Of Puppets', price: '24.99', format: 'CDBase.png', cover: 'metallica_master_of_puppets.jpg' },
        { id: 3, artistName: 'The Killers', albumTitle: 'Hot Fuss', price: '24.99', format: 'CDBase.png', cover: 'killers_hot_fuss.jpg' }

    ];

    return <ProductList title="New CDs" products={products} />;
};

const UsedVinyl = () => {
    const products = [
        { id: 1, artistName: 'Death Grips', albumTitle: 'Ex-Military', price: '999.99', format: 'VinylBase.png', cover: 'death_grips_ex_military.jpg' },
        { id: 2, artistName: 'Miles Davis', albumTitle: 'On The Corner', price: '74.99', format: 'VinylBase.png', cover: 'davis_miles_on_the_corner.jpg' },
        { id: 3, artistName: 'Gas', albumTitle: 'Königsforst', price: '149.99', format: 'VinylBase.png', cover: 'gas_konigsforst.jpg' }

    ];

    return <ProductList title="Used vinyl" products={products} />;
};

const UsedCDs = () => {
    const products = [
        { id: 1, artistName: 'Fushitsusha', albumTitle: '1st', price: '99.99', format: 'CDBase.png', cover: 'fushitsusha_1st.jpg' },
        { id: 2, artistName: 'Three Days Grace', albumTitle: 'One-X', price: '19.99', format: 'CDBase.png', cover: 'three_days_grace_one_x.jpg' },
        { id: 3, artistName: 'Fall Out Boy', albumTitle: 'From Under The Cork Tree', price: '14.99', format: 'CDBase.png', cover: 'fall_out_boy_from_under_the_cork_tree.jpg' }

    ];

    return <ProductList title="Used CDs" products={products} />;
};

export { FeaturedProducts, NewVinyl, NewCDs, UsedVinyl, UsedCDs };