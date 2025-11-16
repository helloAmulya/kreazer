
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SideTopNav from "./SideTopNav";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottom from "./SideNavBottom";
function SideNav() {

    const { user } = useKindeBrowserClient();
    return <div className="bg-[#3635364d] backdrop-blur-xl h-screen w-72 fixed border-r border-neutral-600 flex flex-col p-6">
        {/*  if any issue in ui, check for the dashboard layout file */}


        <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
        />
        <div className="flex-1">

            <SideTopNav user={user} />
        </div>

        <div>

        </div>
        <SideNavBottom />


    </div>;
}

export default SideNav;


