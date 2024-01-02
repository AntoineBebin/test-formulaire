import { Meta, Story } from '@storybook/react'
import React from 'react'
import { object, z } from 'zod'

import { Button } from '@/components/ui/Button'
import Heading from '@/components/ui/Heading/Heading'

import { Box } from '../Box'
import { InputField } from '../Field/Input'

import Form from './Form'

type FormValues = {
  firstname: string
  lastname: string
  message: string
}

const Schema = object({
  firstname: z.string().min(1, 'Firstname is required.').max(420),
  lastname: z.string().min(1, 'Lastname is required.').max(420),
  message: z.string().min(1, 'Message is required.').max(420)
})

const MyForm = ({ hideSubmit = false }: { hideSubmit?: boolean }) => {
  return (
    <Form<FormValues, typeof Schema>
      onSubmit={async values => {
        alert(JSON.stringify(values, null, 2))
      }}
      schema={Schema}
      id="my-form"
    >
      {({ register, formState }) => (
        <>
          <Heading size="h2" spaceAfter="20px">
            Une question ? besoin de conseil ? <br />
            d’un rendez vous ?
          </Heading>
          <Box flex col gap="30px" spaceAfter="25px">
            <Box flex gap="30px">
              <InputField
                label="Firstname"
                name="firstname"
                placeholder="Votre nom"
                error={formState.errors['firstname']}
                registration={register('firstname')}
              />
              <InputField
                label="Lastname"
                name="lastname"
                placeholder="Votre prénom"
                error={formState.errors['lastname']}
                registration={register('lastname')}
              />
            </Box>
            <InputField
              label="Message"
              name="message"
              placeholder="Votre message"
              error={formState.errors['message']}
              registration={register('message')}
            />
          </Box>

          {!hideSubmit && (
            <Box flex gap="30px">
              <Form.SubmitButton variant="primary">Envoyer</Form.SubmitButton>
              <Button variant="outline" type="reset">
                Annuler
              </Button>
            </Box>
          )}
        </>
      )}
    </Form>
  )
}

const meta: Meta = {
  title: 'Components/Form',
  component: MyForm,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story = () => <MyForm />

export const Default = Template.bind({})
Default.args = {}
