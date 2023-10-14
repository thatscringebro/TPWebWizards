import AboutUs from "./components/Aboutus";
import ContactForm  from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

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
];

export default AppRoutes;
