import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function BmiForm() {
  const { height, setHeight } = useState("");
  const { weight, setWeight } = useState("");

  return (
    <div>
      BmiForm for user input
      <Form className="" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formHeight">
          <Form.Control
            type="text"
            placeholder="Height in m"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-control"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Control
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="form-control"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get BMI
        </Button>
      </Form>
    </div>
  );
}

export default BmiForm;
