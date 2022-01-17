import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Romana Bac</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                        <a className="nav-link" href="#">Liste des donateurs</a>
                        <a className="nav-link" href="#">Videos</a>
                        <a className="nav-link" href="#">Photos</a>
                        <a className="nav-link" href="#">Sondages</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
