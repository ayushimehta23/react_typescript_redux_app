import React from "react";

const Footer: React.FC<{}> = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Footer Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/" className="text-white">About</a></li>
                            <li><a href="/" className="text-white">Services</a></li>
                            <li><a href="/" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p className="mb-1">1234 Street Name, City, Country</p>
                        <p className="mb-1">Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="text-white">+123 456 7890</a></p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <div className="d-flex">
                            <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
