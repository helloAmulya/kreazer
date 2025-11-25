import { Button } from '@/components/ui/button'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

function Header() {

    const { user }: any = useKindeBrowserClient();

    return (

        <div className='flex justify-end w-full gap-2 text-white items-center mt-4 pr-2'>

            <div className='flex gap-2 items-center rounded-md p-1 border-b border-[#B589EC]
            '>
                <Search className='h-4 w-4 ' />
                <input type="text" placeholder='Search' className='border-none outline-none ' />
            </div>

            <div >
                <Image
                    src={user?.picture || "/vercel.svg"}
                    height={30}
                    width={30}
                    alt="user"
                    className="rounded-full"
                />
            </div>

            <Button className="flex gap-2 cursor-pointer h-8 bg-[#3f334d94] hover:bg-[#b689ec64] text-white"><Send className='h-4 w-4' />Invite</Button>
        </div>
    )
}

export default Header