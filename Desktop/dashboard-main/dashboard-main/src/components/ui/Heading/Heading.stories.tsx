import { Meta, Story } from '@storybook/react'

import Heading, { HeadingProps } from './Heading'

const meta: Meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<HeadingProps> = ({ children, ...props }) => <Heading {...props}>{children}</Heading>

export const Default = Template.bind({})
Default.args = {
  size: 'h1',
  color: 'black',
  children: 'Decouvrez nos produits d’une incroyable efficacité'
}
