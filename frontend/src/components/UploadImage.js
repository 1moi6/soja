import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const UploadImage = () => {
  const { authtokens } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode implementar a lógica para enviar a imagem para o servidor
    // usando a biblioteca de sua escolha (por exemplo, axios, fetch, etc.)

    // Exemplo de como enviar a imagem usando o pacote 'axios':
    const formData = new FormData();
    formData.append("nome", name);
    formData.append("mapa", image);

    fetch("http://127.0.0.1:8000/api/mapas/upload/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authtokens.access}`,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha no upload da imagem");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setName("");
        setImage(null);
      })
      .catch((error) => {
        console.error("Erro durante o upload da imagem:", error);
        // Trate o erro de upload aqui, se necessário
      });
  };

  return (
    <Container>
      <Form className="pb-1 pt-1" style={{ backgroundColor: "#f5f5ff" }}>
        <Form.Group className="m-3">
          <Row className="mb-2">
            <Col>
              <Form.Label style={{ marginBottom: "-2px" }}>
                Identificação
              </Form.Label>
              <Form.Control value={name} onChange={handleNameChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label style={{ marginBottom: "-2px" }}>Mapa</Form.Label>
              <Form.Control
                key={name}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Row className="justify-content-center mt-3">
        <Col md={3}>
          <Button
            onClick={handleSubmit}
            style={{ color: "#124265", borderColor: "#124265" }}
            variant="outline-primary"
          >
            salvar alterações
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadImage;
