
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SideTopNav, { TEAM } from "./SideTopNav";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottom from "./SideNavBottom";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner"


function SideNav() {

    const { user } = useKindeBrowserClient();
    const [activeTeam, setActiveTeam] = useState<TEAM>()

    const createFile = useMutation(api.files.createFile)

    const onFileCreate = async (fileName: string): Promise<boolean> => {
        if (!activeTeam?._id || !user?.email) {
            toast.error('Please select a team first');
            return false;
        }
        if (!fileName?.trim()) {
            toast.error('File name is required');
            return false;
        }
        try {
            const res = await createFile({
                fileName: fileName.trim(),
                teamId: activeTeam._id,
                createdBy: user.email,
                archive: false,
                document: '',
                whiteBoard: '',
            });
            if (res) {
                toast.success("File has been created");
                return true;
            }
            toast.error("Failed to create file");
            return false;
        } catch (error) {
            toast.error("Error creating file");
            console.error(error);
            return false;
        }
    }

    return <div className="bg-[#1a1a1a4d] backdrop-blur-xl h-screen w-72 fixed border-r border-neutral-600 flex flex-col p-6">
        {/*  if any issue in ui, check for the dashboard layout file */}


        <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
        />
        <div className="flex-1">
            <SideTopNav user={user}
                setActiveTeamInfo={(team: TEAM) => setActiveTeam(team)} />

        </div>

        <div>

        </div>
        <SideNavBottom onFileCreate={onFileCreate} />


    </div>;
}

export default SideNav;


