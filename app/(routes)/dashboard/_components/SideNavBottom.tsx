import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import { h2 } from "motion/react-client";
import React, { useState } from "react";
import { toast } from "sonner";
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

// interface SideNavBottomProps {
//     onFileCreate: (fileName: string) => Promise<boolean>;
//     totalFiles: number
// }

const SideNavBottom = ({ onFileCreate, totalFiles }: any) => {
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

    const [fileInput, setFileInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
    };

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

            <Dialog>
                {totalFiles < 5 ? (
                    <DialogTrigger asChild>
                        <Button className="w-full justify-start mt-3 bg-[#8c43fa] hover:bg-[#7a4dd2]">
                            New File
                        </Button>
                    </DialogTrigger>
                ) : (
                    <div className="relative w-full group">
                        <div
                            className="
    absolute 
    -top-5
    left-1/2 -translate-x-1/2 
    bottom-full mb-2
    bg-black text-white 
    text-[10px] sm:text-xs
    px-2 py-1 
    rounded 
    opacity-0 group-hover:opacity-100 
    group-active:opacity-100
    transition-all 
    whitespace-nowrap
    pointer-events-none 
  "
                        >
                            Maximum file limit reached
                        </div>

                        <Button
                            className="w-full justify-start mt-3 bg-[#8c43fa] opacity-50 cursor-not-allowed"
                            disabled
                        >
                            New File
                        </Button>
                    </div>
                )}

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
                <div
                    className="h-3 bg-[#a043f1] rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((totalFiles / 5) * 100, 100)}%` }}
                />
            </div>

            <h2 className="text-[12px] mt-3">
                {totalFiles} out of <strong>5</strong> files used
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
