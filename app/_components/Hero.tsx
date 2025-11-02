import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-black">

        <div className="flex items-baseline justify-center pt-20">
         
          <h2 className="rounded-full border border-neutral-300 py-1 px-3 text-center text-white font-semibold text-sm ">

            by <span className="">DaddyCorp</span>
          </h2>
        </div>
        <BackgroundLines
          className="flex items-center justify-center w-full h-full px-4"
          svgOptions={{
            stroke: "rgba(255, 255, 255, 0.15)",
            strokeWidth: 1,
          }}
        >
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

        </BackgroundLines>

      </section>
    </div>
  );
}

export default Hero;


// (optional) zoomed in version landing page design  
// import { BackgroundLines } from "@/components/ui/background-lines";
// import React from "react";

// function Hero() {
//   return (
//     <div>
//       <section className="relative bg-black h-screen overflow-hidden">
//         {/* Badge - Fixed at top */}
//         <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
//           <h2 className="rounded-full border border-neutral-300 py-1 px-3 text-center text-white font-semibold text-sm bg-black/40 backdrop-blur-sm">
//             by <span className="">DaddyCorp</span>
//           </h2>
//         </div>

//         {/* BackgroundLines + Centered Content */}
//         <BackgroundLines
//           className="flex items-center justify-center w-full h-full px-4"
//           svgOptions={{
//             stroke: "rgba(255, 255, 255, 0.15)",
//             strokeWidth: 1,
//           }}
//         >
//           <div className="text-center max-w-3xl mx-auto z-10">
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
//               AI for technical design{" "}
//               <strong className="text-[#b589ec]">&</strong> documentation
//             </h1>
//             <p className="mt-6 text-lg md:text-xl text-neutral-300">
//               Deliver accurate, consistent designs faster
//             </p>

//             <div className="mt-10">
//               <a
//                 href="#"
//                 className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-medium text-black shadow hover:bg-gray-100 transition-colors"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </BackgroundLines>
//       </section>
//     </div>
//   );
// }

// export default Hero;