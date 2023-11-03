export const dynamicParams = false

const Test = ({ params }) => {
  return (
    <>
      <h1>Slug</h1>
    </>
  )
}

export async function generateStaticParams() {
  // Endpoint that would only return slugs of every page builder page from Sanity

  // This correctly loads /page and 404s all other routes
  const allPages = [{ slug: ['page'] }]

  // This causes all routes to load an empty page and not 404
  // const allPages = []

  return allPages
}

export default Test
