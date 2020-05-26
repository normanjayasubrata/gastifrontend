import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Container>
        <Alert variant="warning">
          <Alert.Heading>Page Not Found</Alert.Heading>
          <p>
            Sorry, the page is not available
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to="/"><Button variant="outline-info">Back To Home Page</Button></Link>
          </div>
        </Alert>
      </Container>
    </div>
  );
};

export default NotFound;
