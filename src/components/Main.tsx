import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";

const Main: React.FC<{}> = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default Main;
