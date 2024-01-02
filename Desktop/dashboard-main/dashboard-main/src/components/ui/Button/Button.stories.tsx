import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<ButtonProps> = props => <Button {...props} />

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  size: 'md',
  children: 'Acheter maintenant',
  disabled: false,
  loading: false
}

export const SecondaryLink = Template.bind({})
SecondaryLink.args = {
  variant: 'secondary',
  size: 'md',
  href: '/',
  children: 'Acheter maintenant',
  disabled: false,
  loading: false
}
