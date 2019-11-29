import React from 'react'
import './FormCheckbox.scss'

import { Form, Row, Col } from 'react-bootstrap'

export default function FormCheckbox (props) {
  return (
    <>
      <Form.Group as={Row} controlId="formField">
        <Form.Label column sm="4">
          {props.label}
        </Form.Label>
        <Col sm="8">
          {
            props.options.map((option, i) =>
              <Form.Check 
                key={i}
                type={option.type || 'checkbox'}
                id={`${props.id}-${i}`}
                label={option.label}
              />
            )
          }
        </Col>
      </Form.Group>
    </>
  )
}
