import React from 'react'
import './piProfile.scss'

import { Form, Button } from 'react-bootstrap'
import FormField from '../../common/form-field/FormField'
import FormCheckbox from '../../common/form-checkbox/FormCheckbox'

import { formData } from '../../../assets/formData'

export default class piProfile extends React.Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render () {
    const { form } = this.state

    return (
      <div className="piProfile-wrapper">
        <h1 className="title">pi portfolio: test</h1>
  
        <Form className="clearfix">
          {
            formData.map((fields, i) =>
              fields.checkbox
              ? <FormCheckbox
                key={i}
                {...fields}
              />
              : <FormField
                key={i}
                {...fields}
              />
            )
          }
          <Button
            variant="light"
            type="submit"
            className="submit-btn float-right"
          >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
