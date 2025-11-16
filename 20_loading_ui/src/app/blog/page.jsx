import { Meadata } from 'next'

export const metadata = {
    title: {
        absolute: "Blog"
    }
}

export default async function Blog() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 1000);
    })
  return (
    <div>
        <h1>Blog page...</h1>
    </div>
  )
}

 