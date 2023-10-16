import AboutUs from "./components/Aboutus";
import ContactForm from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Products from "./components/Product";
import Account from "./components/Account";


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
        path: '/products',
        element: <Products />
    },
    {
        path: '/account',
        element: <Account />
    }
];

export default AppRoutes;