import { Metadata } from 'next'

//Note: we can not use both generateMetadata func and metadata {} in the same route segement
// and also it will not work in "use client" marked directive and to see solution of it see counter folder.

//dynamic metdata
export const generateMetadata = async ({ params }) => {
    const id = (await params).productId
    return {
        title: `Product ${id}`
    }
}

export default async function page({ params }) {

    const { productId } = await params

  return (
    <div>
        <p>Details about product {productId}</p>
    </div>
  )
}

