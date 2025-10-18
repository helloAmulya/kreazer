import React from 'react'

function Hero() {
  return (
    <div>
      <section className="bg-black">
        <div className='flex items-baseline 
        justify-center pt-20'>
          <h2 className='text-white border 
            px-3 p-2 rounded-full
        text-center border-white'>by | <span className='text-sky-300'>DaddyCorp</span></h2>

        </div>
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="md:text-[55px] font-bold text-white text-4xl ">
              AI for technical design <strong className='text-[#b589ec]'>&</strong> documentation
            </h1>
            <p className="mt-4 text-base text-pretty text-neutral-200 sm:text-lg/relaxed">
              Deliver accurate, consistent designs faster
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-gray-300 focus:outline-none focus:ring  sm:w-auto"
                href="#"
              >
                Learn More
              </a>


            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero