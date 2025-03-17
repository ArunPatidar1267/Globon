import Navbar from "./Navbar.jsx";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import '../styles.css';
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Layout;


