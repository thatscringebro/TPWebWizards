import Home from "../Home";
import AboutUs from "../Aboutus";
import ArtistAlbums from "../ArtistAlbums";
import ContactForm from "../ContactUs";
import Detail from "../Detail";
import SearchResults from "../SearchResults";
import Product from "../Product";
import AddProductForm from "../AddProductForm";
import Account from "../Account";


const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        exact: true
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/contactus',
        element: <ContactForm />
    },
    {
        path: '/search',
        element: <SearchResults />
    },
    {
        path: '/add-product',
        element: <AddProductForm />
    },
    {
        path: '/album',
        element: <Product />
    },
    {
        path: '/artist/:artistId/albums',
        element: <ArtistAlbums /> 
    },
    {
        path: '/account',
        element: <Account />
    }

];

export default AppRoutes;
