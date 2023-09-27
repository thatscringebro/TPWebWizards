import AboutUs from "./components/Aboutus";
import ContactForm from "./components/ContactUs";
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
    }
];

export default AppRoutes;
