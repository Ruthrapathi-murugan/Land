import React from 'react';


function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
