import '../../App.css'
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import CardNoticia from '../Noticias/CardNoticia';

const Inicio = () => {

    return (
        <Container className='fontR'>
            <Row className=''>
                <h1 className='display-1 text-center my-4'>Pagina Principal</h1>
                <CardNoticia></CardNoticia>
            </Row>
        </Container>
    );
};

export default Inicio;