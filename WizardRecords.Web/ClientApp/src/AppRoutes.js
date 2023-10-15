import AboutUs from "./components/Aboutus";
import ContactForm  from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Products from "./components/Product";


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
<<<<<<< HEAD
    {
        path: '/search',
        element: <SearchResults />
    },
=======
     {
         path: '/products',
         element: <Products />
    }
>>>>>>> origin/main
];

export default AppRoutes;
