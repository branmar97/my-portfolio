import Head from 'next/head'
import Link from 'next/link';
import { format, parseISO, add } from 'date-fns'
import { blogPosts } from '../lib/data'

export default function Portfolio() {
  return (
    <div className="mx-auto w-11/12">
      <Head>
        <title>Brandon Marrero | Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="text-off-white">
        <h1 className="text-4xl">
          My Blog
        </h1>
        <small>Posts ({blogPosts.length})</small>
        <div className="mt-6 grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center">
            {blogPosts.map((item) => (
                <div className="mb-6 border border-off-white shadow hover:shadow-2xl transition duration-500 ease-in-out p-5 rounded space-y-2" key={item.slug}>
                    <div className="text-xl font-bold"><Link href={`/blog/${item.slug}`}><a>{item.title}</a></Link></div>
                    <div className="text-gray-light text-sm">{format(parseISO(item.date), 'MMMM do, uuu')}</div>
                    <div className="w-88">{item.content}</div>
                    <div><Link href={`/blog/${item.slug}`}><a><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-2 px-4 rounded mt-3">Read More</button></a></Link></div>
                </div>
            ))}
        </div>
      </main>
    </div>
  )
}