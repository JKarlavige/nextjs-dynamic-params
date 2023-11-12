import { notFound } from 'next/navigation'

// Allow dynamic pages which are not generated at build time
export const dynamicParams = true

// Use ISR to retrieve page generated after build
export const revalidate = 5

const Test = async ({ params }) => {

  // Fetch full page data by slug
  const pageData = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`)
      .then(response => response.json()) 

  // Throw 404 if content not found
  // How can we trigger our rewrites here?
  if(!pageData?.username) {
    notFound()
  }

  return (
    <>
      <h1>Username: {pageData.username}</h1>
    </>
  )
}

export async function generateStaticParams() {

  // Generate existing pages at build time
  // This generates a page with user ID = 1
  const pages = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) 
    
  if(!pages?.length) return null

  let allPages = pages.map(page =>  ({ slug: [ `${page.id}` ] }))

  // Remove page with id = 10 for this example
  // this will represent a 'dynamic page'
  allPages.pop()
  
  return allPages
}

export default Test
