import AboutUs from "../Aboutus";
import ArtistAlbums from "../ArtistAlbums";
import ContactForm from "../ContactUs";
import Detail from "../Detail";
import Home from "../Home";
import SearchResults from "../SearchResults";
import ProductGallery from "../ProductGallery";
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
        path: '/products',
        element: <ProductGallery />
    },
    {
        path: '/artist/:artistName',
        element: <ArtistAlbums /> 
    },
    {
        path: '/account',
        element: <Account />
    }

];

export default AppRoutes;