import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Team = () => {
    return (
        <div>
            <h2>This is Our team</h2>
              
    <Container fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4>

      <Row>
        {/* Card 1 */}
        <Col md={12} lg={4} className="mb-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              />
              <Badge bg="primary" className="position-absolute top-0 start-0 m-2">
                New
              </Badge>
            </div>
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>$61.99</h6>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              />
              <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                Eco
              </Badge>
            </div>
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>$61.99</h6>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              />
              <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                -10%
              </Badge>
            </div>
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>
                <s>$61.99</s>
                <span className="text-danger ms-2">$50.99</span>
              </h6>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={12} lg={4} className="mb-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
              />
              <div className="position-absolute top-0 start-0 m-2">
                <Badge bg="success" className="me-1">Eco</Badge>
                <Badge bg="danger">-10%</Badge>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>
                <s>$61.99</s>
                <span className="text-danger ms-2">$50.99</span>
              </h6>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
            />
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>$61.99</h6>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 6 */}
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              />
              <div className="position-absolute top-0 start-0 m-2">
                <Badge bg="primary" className="me-1">New</Badge>
                <Badge bg="success" className="me-1">Eco</Badge>
                <Badge bg="danger">-10%</Badge>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Product name</Card.Title>
              <Card.Text>Category</Card.Text>
              <h6>
                <s>$61.99</s>
                <span className="text-danger ms-2">$50.99</span>
              </h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>   
        </div>
    );
};

export default Team;