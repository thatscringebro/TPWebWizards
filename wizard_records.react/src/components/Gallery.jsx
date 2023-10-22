import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from './Product.jsx';

const Gallery = ({ title, albums = [] }) => {
    const SplitSearch = title.split(' ');
    return (
        <section className={`product-list section-${SplitSearch[0]}`}>
            <Container>
                <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>{title}</h1>
                    <h3>
                        <Link
                            to={`/album?category=${SplitSearch[0]}&mediatype=${SplitSearch[1]}`} > Click for more {'->'}
                        </Link>
                    </h3>
                </div>
                <Row>
                    {albums.map(album => <Product key={album.id} album={album} />)}
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;