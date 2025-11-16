import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
// import { Separator } from "@radix-ui/react-separator";
import { Separator } from "@/components/ui/separator"
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";


export interface TEAM {
    teamName: string,
    createdBy: string,
    _id: string,
}
function SideTopNav({ user }: any) {

    const convex = useConvex();
    const router = useRouter();
    const [teamList, setTeamList] = useState<TEAM[]>()
    const [activeTeam, setActiveTeam] = useState<TEAM>()

    useEffect(() => {
        user && getTeamList();

    }, [user])

    useEffect(() => {
        activeTeam ? setActiveTeam(activeTeam) : null
    }, [activeTeam])


    const onMenuClick = (item: any) => {
        if (item.path) {
            router.push(item.path)
        }
    }

    const getTeamList = async () => {
        const res = await convex.query(api.teams.getTeam, { email: user?.email })
        setTeamList(res)
        setActiveTeam(res[0])
    }

    // console.log(user)
    const menu = [
        {
            name: "Create Team",
            id: 1,
            path: "/teams/create ",
            icon: Users,
        },
        {
            name: "Settings",
            id: 2,
            path: "/user/settings",
            icon: Settings,
        },
    ];


    return (
        <div>

            <Popover >
                <PopoverTrigger>


                    <div className="flex items-center mx-auto hover:bg-[#3232328f] rounded-lg gap-3 p-2 hover:cursor-pointer">
                        <Image
                            src="/kreazer-logo-main.png"
                            alt="logo"
                            width={45}
                            height={45}
                        />
                        <h3 className="text-white text-[17px] font-bold flex gap-2 item-center justify-center">
                            {activeTeam?.teamName}
                            <ChevronDown />
                        </h3>
                    </div>
                </PopoverTrigger>

                <PopoverContent className="ml-7 p-4 bg-black text-white border-neutral-700 rounded-lg relative">
                    {/*  added relaive to fix the glow effect  */}
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <div>
                        {/* {teamList?.map((team, index) => (

                            <h2 key={index} className={` bg-[#2865E0] rounded-sm p-1 font-semibold text-[15px] pl-3 hover:cursor-pointer ${activeTeam?._id == team._id && 'bg-blue-500'}`}
                                onClick={() => setActiveTeam(team)}
                            >{team.teamName}</h2>
                        ))} */}
                        {teamList?.map((team, index) => (
                            <h2 key={index}
                                className={`p-1
                                    hover:bg-[#2865E0]
                                    mb-1
                         hover:text-white
                         rounded-sm font-semibold text-[15px] pl-3 hover:cursor-pointer
                         ${activeTeam?._id == team._id && 'bg-blue-500 hover:bg-[#2865E0] text-white'}`}
                                onClick={() => setActiveTeam(team)}
                            >{team.teamName}</h2>
                        ))}
                    </div>
                    <Separator className="mt-2 bg-neutral-700" />
                    {/* other options*/}
                    <div>
                        {menu.map((item, index) => (
                            <h2 className="flex items-center gap-2 p-2 hover:bg-[#3232328f] rounded-lg cursor-pointer" key={index}
                                onClick={() => onMenuClick(item)}
                            >
                                <item.icon className="h-4 w-4" />
                                {/* this is a good way to add a component (images/icons etc.) */}
                                {item.name}
                            </h2>
                        ))}

                        <LogoutLink><h2 className="flex items-center gap-2 p-2 hover:bg-[#3232328f] rounded-lg cursor-pointer" >
                            <LogOut className="h-4 w-4" />

                            Logout
                        </h2> </LogoutLink>
                    </div>
                    <Separator className="mt-2 bg-slate-700" />

                    {/* user info section */}
                    {user && <div className="mt-2 flex gap-2 items-center">
                        <Image src={user?.picture}
                            height={35}
                            width={35}
                            alt="user"
                            className="rounded-full"
                        /><div>
                            <h2 className="font-bold text-[14px]">{user?.given_name}{user?.family_name}</h2>
                            <h2 className="text-[13px] text-gray-400">{user?.email}</h2>
                        </div>
                    </div>}


                </PopoverContent>
            </Popover>

            <Button className="w-full justify-start mt-8 font-bold gap-2 bg-gray-100"
                variant='outline'
            >
                <LayoutGrid className="h-5 w-5" />
                All Files
            </Button>
        </div>
    );
}

export default SideTopNav;
