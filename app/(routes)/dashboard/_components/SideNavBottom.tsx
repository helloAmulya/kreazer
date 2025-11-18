import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import { h2 } from "motion/react-client";
import React, { useState } from "react";
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SideNavBottomProps {
    onFileCreate: (fileName: string) => Promise<boolean>;
}

const SideNavBottom = ({ onFileCreate }: SideNavBottomProps) => {
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

    const [fileInput, setFileInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleCreateFile = async () => {
        setIsLoading(true);
        try {
            const success = await onFileCreate(fileInput);
            if (success) {
                setFileInput("");
            }
        } finally {
            setIsLoading(false);
        }
    }

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
            {/* <Dialog>
                <DialogTrigger className="w-full">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full  justify-start mt-3
            ">
                        New File
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-700">
                    <DialogHeader>
                        <DialogTitle> Create New File</DialogTitle>
                        <DialogDescription>
                            <Input className="text-black " placeholder="Enter File Name" />
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="bg-gray-700 hover:bg-gray-800 text-white">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog> */}

            <Dialog>
                <DialogTrigger className="w-full " asChild>
                    <Button
                        className="w-full justify-start mt-3 bg-[#8c43face] hover:bg-[#7a4dd2f4]"
                    >
                        New File
                        {/* // you can also add asChild in the Dialog Trigger to remove the hydration error, but this works fine */}
                    </Button>
                </DialogTrigger>

                <DialogContent className="bg-black border border-neutral-800 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-white">Create New File</DialogTitle>

                        <DialogDescription className="text-neutral-400">
                            <Input
                                className="mt-2 bg-neutral-900 border-neutral-700 text-white focus-visible:ring-0"
                                placeholder="Enter File Name"
                                onChange={(e) => setFileInput(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="">
                        <Button
                            type="button"
                            variant="secondary"
                            className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                            disabled={!(fileInput && fileInput.length > 3) || isLoading}
                            onClick={handleCreateFile}
                        >
                            {isLoading ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Progress Bar Button */}
            <div className="h-3 w-full bg-gray-400 rounded-full mt-3">
                <div className="w-[30%] h-3 bg-[#a043f1] rounded-full"></div>
            </div>

            <h2 className="text-[12px] mt-3">
                1 out of <strong>5</strong> files used
            </h2>
            <h2 className="text-[13px] mt-1">
                {" "}
                <span className="underline underline-offset-3 cursor-pointer">
                    Upgrade
                </span>{" "}
                your plan for unlimited access
            </h2>
        </div>
    );
};

export default SideNavBottom;
