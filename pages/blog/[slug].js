import Head from 'next/head'
import { blogPosts } from '../../lib/data';

export default function PostPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>Brandon Marrero | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          {title}
        </h1>
        <p>{date}</p>
        <p>{content}</p>
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