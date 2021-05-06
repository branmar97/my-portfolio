import Head from 'next/head'
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { format, parseISO, add } from 'date-fns'
import { getAllPosts } from '../../lib/data';

export default function PostPage({ title, date, content }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Brandon Marrero | {title}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="text-off-white">
        <div className="mb-4 text-sm"><Link href="/blog"><a>&#8592; Back to Blog</a></Link></div>
        <div className="space-y-2">
          <div className="border-b-2 border-gray-light mb-4">
            <h1 className="text-orange-dark text-4xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-gray-light text-sm mb-2">{format(parseISO(date), 'MMMM do, uuu')}</p>
          </div>
          <div className="cms-content"><MDXRemote {...content} /></div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const { params } = context;
    const allPosts = getAllPosts()
    const { data, content } = allPosts.find((post) => post.slug === params.slug)
    const mdxSource = await serialize(content)
    return {
        props: {
          ...data,
          date: data.date.toISOString(),
          content: mdxSource,
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: getAllPosts().map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}