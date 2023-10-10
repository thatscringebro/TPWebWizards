import AboutUs from "./components/Aboutus";
import ContactForm from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        exact: true
    },
    {
        path: '/album/:id',
        element: <Detail />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/contactus',
        element: <ContactForm />
    }
];

export default AppRoutes;
