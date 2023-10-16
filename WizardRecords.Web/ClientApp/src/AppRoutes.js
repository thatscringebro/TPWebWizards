import AboutUs from "./components/Aboutus";
import ContactForm  from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Products from "./components/Product";
import AddProductForm from "./components/AddProductForm";


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
        path: '/add-product',
        element: <AddProductForm />
    }

];

export default AppRoutes;
