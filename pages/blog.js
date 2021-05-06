import Head from 'next/head'
import Link from 'next/link';
import { format, parseISO } from 'date-fns'
import { getAllPosts } from '../lib/data'

export default function Blog({ posts }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Brandon Marrero | Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="text-off-white">
        <h1 className="text-4xl">
          My Blog
        </h1>
        <small>Posts ({posts.length})</small>
        <div className="mt-6 grid md:grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center">
            {posts.map((item) => (
                <div className="bg-black bg-opacity-25 shadow hover:shadow-2xl transition duration-500 ease-in-out rounded space-y-4 text-center justify-center p-8 max-w-xl" key={item.slug}>
                    <div className="text-xl font-bold"><Link href={`/blog/${item.slug}`}><a>{item.title}</a></Link></div>
                    <div className="text-gray-light text-sm">{format(parseISO(item.date), 'MMMM do, uuu')}</div>
                    <div className="text-left">{item.summary}</div>
                    <div><Link href={`/blog/${item.slug}`}><a><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-2 px-4 rounded mt-3">Read More</button></a></Link></div>
                </div>
            ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts.map(({ data, summary, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        summary: data.summary,
        slug,
      }))
    }
  };
}