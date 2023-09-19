import AboutUs from "./components/Aboutus";
import ContactForm from "./components/ContactUs";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/contactus',
        element: <ContactForm />
    },
    //{
    //    path: '/counter',
    //    element: <Counter />
    //},
    //{
    //    path: '/fetch-data',
    //    element: <FetchData />
    //}
];

export default AppRoutes;
