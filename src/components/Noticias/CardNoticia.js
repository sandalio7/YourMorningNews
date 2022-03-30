import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css'

const cardNoticia = () => {
    return (
        <Card className='w-100 container'>
        <Card.Body>
          <Card.Title className='text-center'><h2 className='display-6'>Titulo noticia</h2></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Link to='*'><Card.Link>Ver mas</Card.Link></Link>
        </Card.Body>
      </Card>
    );
};

export default cardNoticia;