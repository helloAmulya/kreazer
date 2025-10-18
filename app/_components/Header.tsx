import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from 'next/image'
import React from 'react'

function Header() {
  return ( 
    <div><header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-center gap-2 ">

          <Image src="/kreazer-logo-main.png" alt="logo"
            width={40}
            height={40}
          />
          <h3 className='text-white text-xl'>Kreazer</h3>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> About </a>
              </li>

              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> Careers </a>
              </li>

              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> History </a>
              </li>

              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>

              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>

              <li>
                <a className="text-neutral-300 transition hover:text-gray-500/75" href="#"> Blog </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

              <LoginLink postLoginRedirectURL="/dashboard" className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition">

                Login
              </LoginLink>

              <RegisterLink className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-[#8239dc] sm:block">Register</RegisterLink>
            </div>

            <button
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header