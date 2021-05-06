import Head from 'next/head'
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brandon Marrero</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className='max-w-5xl mx-auto px-6 lg:px-0 space-y-4'>
        <p className="text-yellow-light text-2xl">
          Hello, my name is
        </p>
        <h1 className="text-off-white text-4xl sm:text-6xl">
          Brandon Marrero.
        </h1>
        <h2 className="text-off-white text-2xl sm:text-4xl">
          {"<Software Engineer />"}
        </h2>
        <div>
          <img src="/images/pic.jpeg" alt="Photo of Brandon Marrero" className="rounded-full" width="250" />
        </div>
        <p className="text-off-white w-96">
          I'm building responsive web applications with clean and elegant code using HTML/CSS, Ruby on Rails, JavaScript, React and other tools. I talk about my journey on Twitter and commit my code to Github.
        </p>
        <div className="space-x-4">
          <SocialIcon 
            url="https://github.com/branmar97"
            bgColor="#f6ba50"
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/brandon-mar/"
            bgColor="#f6ba50"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCPFEuvJgOqd4uWEw1psDktg"
            bgColor="#f6ba50"
          />
          <SocialIcon 
            url="https://twitter.com/branmar97"
            bgColor="#f6ba50"
          />
        </div>
      </div>
    </div>
  )
}
