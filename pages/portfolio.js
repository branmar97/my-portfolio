import Head from 'next/head'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Brandon Marrero | Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="text-off-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl mb-6">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-black bg-opacity-25 shadow hover:shadow-2xl transition duration-500 ease-in-out rounded space-y-6 text-center justify-center p-8 max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Apex Link</h2>
              <div className="flex flex-row gap-2 justify-center">
                <img src="/icons/ruby-on-rails-icon.svg" className="w-10 "/>
                <img src="/icons/reactjs-icon.svg" className="w-10"/>
                <img src="/icons/tailwindcss-icon.svg" className="w-10"/>
              </div>
              <div className="mt-4">
                <img src="/images/apexlink-animated.gif" alt="Apex Link Project" className="rounded" />
              </div>
              <div className="text-left">
                <p>
                Single-page Application (SPA) where gamers can find teammates to build an elite squad. Users can create and view lobbies, and filter the results to narrow the listings and find specific players.
                </p>
              </div>
              <div className="flex flex-row gap-5 justify-center">
                <a href="https://www.youtube.com/watch?v=iDxkqqi3Dqw&t=2s"><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-3 px-6 rounded">Demo</button></a>
                <a href="https://github.com/branmar97/apexlink-frontend"><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-3 px-6 rounded">View Code</button></a>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-25 shadow hover:shadow-2xl transition duration-500 ease-in-out rounded space-y-6 text-center p-8 max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Bundl</h2>
              <div className="flex flex-row gap-2 justify-center">
                <img src="/icons/ruby-on-rails-icon.svg" className="w-10 "/>
                <img src="/icons/bootstrap-icon.svg" className="w-10"/>
              </div>
              <div className="mt-4">
                <img src="/images/bundl-animated.gif" alt="Bundl Project" className="rounded" />
              </div>
              <div className="text-left">
                <p>
                A Ruby on Rails web application where users can login/signup to create, view, update and delete events. The goal is to build connections with groups of people who have similar interests.
                </p>
              </div>
              <div className="flex flex-row gap-5 justify-center">
                <a href="https://www.youtube.com/watch?v=pnDAT-erJuM"><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-3 px-6 rounded">Demo</button></a>
                <a href="https://github.com/branmar97/bundl-rails"><button className="bg-orange-dark hover:bg-orange-light transition duration-300 ease-in-out text-off-white text-sm py-3 px-6 rounded">View Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}