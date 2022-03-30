import React from "react";
import { campoRequerido } from "../helpers/Helpers";
import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AgregarNoticia = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [contenidoNoticia, setContenidoNoticia] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            No compartiremos esta informacion con nadie
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Actualidad</option>
            <option value="Espectaculos">Espectaculos</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Deportes">Deportes</option>
            <option value="Sandwich">Politica</option>
            <option value="Economia">Economia</option>
            <option value="Salud">Salud</option>
            <option value="Fotografia">Fotografia</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
