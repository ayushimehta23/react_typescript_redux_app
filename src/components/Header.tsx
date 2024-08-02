import React from "react";

const Header: React.FC<{}> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Pricing</a>
                        </li>
                    </ul>
                    <span className="navbar-text text-white">
                        Navbar text with an inline element
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
