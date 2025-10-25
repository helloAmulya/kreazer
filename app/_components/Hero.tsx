import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-black">
        <div className="flex items-baseline justify-center pt-20">
          <h2 className="rounded-full border border-neutral-300 py-1 px-3 text-center text-white font-semibold text-sm">
            by <span className="">DaddyCorp</span>
          </h2>
        </div>
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-bold text-white md:text-[55px]">
              AI for technical design{" "}
              <strong className="text-[#b589ec]">&</strong> documentation
            </h1>
            <p className="mt-4 text-base text-pretty text-neutral-200 sm:text-lg/relaxed">
              Deliver accurate, consistent designs faster
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-300 focus:ring focus:outline-none sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
