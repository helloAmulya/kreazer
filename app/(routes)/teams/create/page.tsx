"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { KindeUser, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import { create } from 'domain'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { use, useState } from 'react'
import { toast } from 'sonner'

function CreateTeam() {

  const [teamName, setTeamName] = useState('')

  const createTeam = useMutation(api.teams.createTeam)

  const { user }: any = useKindeBrowserClient()
  const router = useRouter()

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((res) => {
      console.log(res)
      if (res) {
        router.push('/dashboard')
        toast('Team created successfully')
      }
    })
  }
  return (
    <div className='bg-black w-full h-screen p-4 md:p-12'>
      <div className='flex items-center mx-auto'>
        <Image
          src="/kreazer-logo-main.png"
          alt="logo"
          width={60}
          height={60}
        />
        <h3 className='text-white font-semibold text-2xl'>Kreazer</h3>
      </div>

      <div className='flex flex-col items-center mt-8'>
        {/* <video playsInline autoPlay muted loop className="mx-auto mb-4" height="150" src="/3d-broadcast.mp4" width="150" ></video> */}
        <video
          playsInline
          autoPlay
          muted
          loop
          className="mx-auto mb-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
          src="/3d-broadcast.mp4">
        </video>


        <h2 className='text-white font-semibold text-[40px] py-3 md:max-w-full text-center text-wrap'> Give your team a name</h2>

        <h2 className='text-neutral-400'>This can be changed later in settings </h2>
        <div className='mt-7 w-[60%] md:w-[40%]'>
          <label className='text-neutral-200'> Team Name</label>
          <Input placeholder='Team Name' className='mt-2 focus:outline-none focus:ring-0 ring-0 text-white' onChange={(e) => setTeamName(e.target.value)} />
        </div>

        <Button className='bg-[#6c45bb] mt-4 md:mt-9 w-[60%] md:w-[40%] hover:bg-[#9571dc]' disabled={!(teamName && teamName.length > 0)}
          onClick={() => createNewTeam()}>
          Create Team
        </Button>
      </div>
    </div>
  )
}

export default CreateTeam