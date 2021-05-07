import Link from 'next/link';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-11/12 mb-16">
      <header>
        <div className="flex justify-between my-4 mb-16">
        
          <Link href="/">
            <a><h1 className="text-2xl font-bold text-center text-yellow-light">{"<Brandon />"}</h1></a>
          </Link>

          <nav>
            <ul className="flex flex-row justify-center space-x-4 text-gray-light">
              <li className="hover:text-yellow-light">
                <Link href="/portfolio">
                  <a> Portfolio </a>
                </Link>
              </li>
              <li className="hover:text-yellow-light">
                <Link href="/blog">
                  <a> Blog </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
