import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon Marrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-auto text-left w-6/12 space-y-4'>
        <p className="text-yellow-light text-2xl">
          Hi, my name is
        </p>
        <h1 className="text-gray-light text-6xl">
          Brandon Marrero.
        </h1>
        <h2 className="text-gray-light text-4xl">
          {"<Software Engineer />"}
        </h2>
        <div>
          <Image 
            src="/../public/images/pic.jpeg"
            alt="Photo of Brandon Marrero"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <p className="text-gray-light w-8/12">
          I'm a software engineer building responsive web applications with clean and elegant code using HTML/CSS, Ruby on Rails, JavaScript, React and various other tools. I talk about my journey on Twitter and commit my code to Github.
        </p>
        <div>
          
        </div>
      </div>
    </div>
  )
}
