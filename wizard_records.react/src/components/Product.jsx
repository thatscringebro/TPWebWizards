import { Container, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Product ({ album }) {
    let coverImageSrc, formatImageSrc;
    try {
        formatImageSrc = require(`../assets/images/format/${album.media}`);
    } catch (err) {
        console.error(`Error requiring format image for ${album.media}`, err);
    }

    try {
        coverImageSrc = require(`../assets/images/covers/${album.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${album.cover}`, err);
    }

    return (
        <Container>             
            <Col md={4} className="d-flex mb-4">
                <Link to={`/detail/${album.id}`} className="card-href card-width">
                    <Card className="h-100">
                        <CardImg top className="card-img-format" src={formatImageSrc} alt={album.media} />
                        <CardImg top className="card-img-cover" src={coverImageSrc} alt={album.cover} />
                        <CardBody className="card-body">
                            <div className="card-info">
                                <CardTitle className="card-artist">{album.artistName}</CardTitle>
                                <CardSubtitle className="card-album">{album.albumTitle}</CardSubtitle>
                            </div>
                            <div className="card-divider"></div>
                            <div className="card-purchase">
                                <CardTitle className="card-price"><b>${album.price}</b></CardTitle>
                                <CardSubtitle className="card-basket">Add to cart</CardSubtitle>
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        </Container>
    );
}

export default Product;