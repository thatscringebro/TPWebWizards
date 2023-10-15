import AboutUs from "./components/Aboutus";
import ContactForm  from "./components/ContactUs";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Account from "./components/Account"

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
        path: '/account',
        element: <Account />
    }
];

export default AppRoutes;
