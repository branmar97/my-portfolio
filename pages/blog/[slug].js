import Head from 'next/head'
import Link from 'next/link';
import { format, parseISO, add } from 'date-fns'
import { blogPosts } from '../../lib/data';

export default function PostPage({ title, date, content }) {
  return (
    <div className="mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
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
          <p>{content}</p>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const { params } = context;
    return {
        props: blogPosts.find((item) => item.slug === params.slug),
    };
}

export async function getStaticPaths() {
    
    return {
        paths: blogPosts.map((item) => ({
            params: {
                slug: item.slug,
            },
        })),
        fallback: false,
    };
}