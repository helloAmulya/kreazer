import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import { h2 } from "motion/react-client";
import React from "react";

const SideNavBottom = () => {
    const menulist = [
        {
            name: "Getting Started",
            id: 1,
            path: "",
            icon: Flag,
        },
        {
            name: "Github",
            id: 2,
            path: "",
            icon: Github,
        },
        {
            name: "Archive",
            id: 2,
            path: "",
            icon: Archive,
        },
    ];

    return (
        <div className="text-white">
            {menulist.map((item, index) => (
                <h2
                    className="flex text-white gap-2 p-1 hover:bg-gray-700 hover:text-white rounded-md px-2 cursor-pointer text-[14px]"
                    key={index}
                >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                </h2>
            ))}

            {/* Add new file */}
            <Button className="bg-blue-600 hover:bg-blue-700 w-full  justify-start mt-3
            ">
                New File
            </Button>

            {/* Progress Bar Button */}
            <div className="h-3 w-full bg-gray-400 rounded-full mt-3">
                <div className="w-[30%] h-3 bg-blue-500 rounded-full">
                </div>
            </div>

            <h2 className="text-[12px] mt-3">1 out of <strong>5</strong> files used</h2>
            <h2 className="text-[13px] mt-1"> <span className="underline underline-offset-3 cursor-pointer">Upgrade</span> your plan for unlimited access</h2>

        </div>
    );
};

export default SideNavBottom;
