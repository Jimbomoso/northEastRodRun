import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: '2021-07-14',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const client = sanityClient(options)

export const imageBuilder = sanityImage(client)

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_TOKEN,
})

export default client
