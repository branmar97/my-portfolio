import Head from 'next/head'
import Link from 'next/link';
import { blogPosts } from '../lib/data'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Brandon Marrero | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Blog
        </h1>
        <div>
            {blogPosts.map((item) => (
                <div key={item.slug}>
                    <div><Link href={`/blog/${item.slug}`}><a>{item.title}</a></Link></div>
                    <div>{item.date.toString()}</div>
                    <div>{item.content}</div>
                </div>
            ))}
        </div>
      </main>
    </div>
  )
}