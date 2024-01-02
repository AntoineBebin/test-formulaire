import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

import { Head } from '../Head'

test('should add proper page title and meta description', async () => {
  const title = 'Hello World'
  const description = 'This is a description'
  const helmetContext = {}

  render(
    <HelmetProvider context={helmetContext}>
      <Head title={title} description={description} />
    </HelmetProvider>
  )
  await waitFor(() => expect(document.title).toEqual(title))

  // eslint-disable-next-line testing-library/no-node-access
  const metaDescription = document.querySelector("meta[name='description']")

  expect(metaDescription?.getAttribute('content')).toEqual(description)
})
