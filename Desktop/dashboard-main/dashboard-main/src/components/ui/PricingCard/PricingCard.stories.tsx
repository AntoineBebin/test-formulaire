import { Meta, Story } from '@storybook/react'

import { PricingCard, PricingCardProps } from './PricingCard'

const meta: Meta = {
  title: 'Components/PricingCard',
  component: PricingCard,
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

const Template: Story<PricingCardProps> = props => <PricingCard {...props} />

export const Discovery = Template.bind({})
Discovery.args = {
  type: 'discovery',
  title: 'Découverte',
  price: 'Gratuit',
  recurrence: '(à vie)',
  description: '“Première dose gratos, le bolosse est fidélisé” - Booba',
  mostPopular: false,
  features: ['Fonctionnalité N°1', 'Fonctionnalité N°2 qui va prendre plus de place', 'Fonctionnalité N°1', 'Fonctionnalité N°1']
}

export const Pro = Template.bind({})
Pro.args = {
  type: 'pro',
  title: 'Pro',
  price: '13.12€',
  recurrence: 'Par utilisateur par mois',
  description: 'Pour les entreprises de petite et moyenne taille',
  mostPopular: true,
  features: ['Fonctionnalité N°1', 'Fonctionnalité N°2 qui va prendre plus de place', 'Fonctionnalité N°1', 'Fonctionnalité N°1']
}

export const ProPlus = Template.bind({})
ProPlus.args = {
  type: 'pro+',
  title: 'Pro+',
  price: 'Sur devis',
  recurrence: 'Tarif sur-mesure selon votre besoin',
  description: 'Pour les grandes entreprises et celles souciantes du détail',
  mostPopular: false,
  features: ['Réduction liée au volume', 'Accompagnement personnalisé', 'Support dédié 24h/24', 'Autre fonction chiante mais cool pour eux']
}
