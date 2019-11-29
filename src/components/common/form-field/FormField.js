import React from 'react'
import './FormField.scss'

import { Form, Row, Col } from 'react-bootstrap'

export default function FormField (props) {
  return (
    <>
      <Form.Group as={Row} controlId="formField">
        <Form.Label column sm="4">
          {props.label}
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type={props.type || 'text'}
            placeholder={props.placeholder}
          />
        </Col>
      </Form.Group>
    </>
  )
}
