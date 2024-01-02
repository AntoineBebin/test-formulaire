import { Meta, Story } from '@storybook/react'
import React from 'react'

import Input, { InputWithAttributesProps } from './Input'

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<InputWithAttributesProps> = props => <Input {...props} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  prefix: '+33',
  placeholder: '6 xx xx xx'
}

export const Custom = Template.bind({})
Custom.args = {
  type: 'password',
  placeholder: 'Password'
}
