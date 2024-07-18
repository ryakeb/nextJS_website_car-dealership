import Navbar from "../navbar";
import Footer from "../footer";
import Separator from "../separator";

export default function Layout({ children, onSearch }) {
    return (
        <>
            <Navbar onSearch={onSearch} />
            {children}
            <Separator />
            <Footer />
        </>
    );
}