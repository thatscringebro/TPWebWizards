import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductList = ({ title, products = [], isHomeGallery = false }) => {
    const formattedTitle = title.replace(/\s+/g, '-').toLowerCase();

    const [category, media] = title.split(' ');

    const isUsed = (category === "Used") ? "true" : "false";
    const mediaType = (media === "Vinyl") ? "Vinyl" : "CD";

    return (
        <section className={`product-list section-${formattedTitle}`}>
            <Container>
                {isHomeGallery && (
                    <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>{title}</h1>
                        <h3>
                            <Link to={`/category?isUsed=${isUsed}&media=${mediaType}`}>
                                Click for more {'->'}
                            </Link>
                        </h3>
                    </div>
                )}
                {!isHomeGallery}
                <Row>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </Row>
            </Container>
        </section>
    );
};

export default ProductList;