import Head from 'next/head'
import Link from 'next/link';
import { blogPosts } from '../lib/data'

export default function Portfolio() {
  return (
    <div className="mx-auto w-11/12">
      <Head>
        <title>Brandon Marrero | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-off-white">
        <h1 className="text-4xl">
          My Blog
        </h1>
        <small>Posts ({blogPosts.length})</small>
        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {blogPosts.map((item) => (
                <div className="mb-6 border border-off-white shadow p-5 rounded space-y-2" key={item.slug}>
                    <div className="text-xl font-bold"><Link href={`/blog/${item.slug}`}><a>{item.title}</a></Link></div>
                    <div>{item.date.toString()}</div>
                    <div>{item.content}</div>
                    <div><Link href={`/blog/${item.slug}`}><a><button className="bg-orange-dark hover:bg-orange-light text-off-white text-sm py-2 px-4 rounded mt-3">Read More</button></a></Link></div>
                </div>
            ))}
        </div>
      </main>
    </div>
  )
}