import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react';
import { Link } from "react-router-dom";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className='bg-dark text-light text-center py-4'>
            
            <section className='row'>
                <article className='col-lg-4 col-md-4 col-sm-12'>
                    <h5 className=''>Redes:</h5>
                    <p>
                    <Link to='*' className='text-light'><FontAwesomeIcon icon={faFacebookSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                    <Link to='*' className='text-light'><FontAwesomeIcon icon={faInstagramSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                    <Link to='*' className='text-light'><FontAwesomeIcon icon={faTwitterSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                    
                    </p>
                </article>
                <article className='col-lg-4 col-md-4 col-sm-12'>&copy; Todos los derechos reservados</article>
                <article className='col-lg-4 col-md-4 col-sm-12'>
                    <h5>Noticias:</h5>
                    <p></p>
                </article>
            </section>
            </footer>
    );
};

export default Footer;