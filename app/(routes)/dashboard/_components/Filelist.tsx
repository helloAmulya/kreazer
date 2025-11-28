import { FileListContext } from "@/app/_context/FileListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { File as FileIcon } from "lucide-react";

function Filelist() {
    const { user }: any = useKindeBrowserClient();
    const { fileList_ } = useContext(FileListContext);

    const [hoveredId, setHoveredId] = useState<string | null>(null);

    if (!fileList_ || fileList_.length === 0) {
        return (
            <div className="mt-10 text-center flex justify-center">
                <div className="bg-gray-900/40 border border-gray-800 px-4 py-3 rounded-xl text-gray-500 text-sm">
                    No files yet. Click “New File” to start.
                </div>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 divide-y divide-gray-800">
                    {/* Header */}
                    <thead className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 text-left">
                        <tr className="text-gray-300 font-semibold text-sm">
                            <th className="px-3 py-3 whitespace-nowrap">Name</th>
                            <th className="px-3 py-3 whitespace-nowrap">Created</th>
                            <th className="px-3 py-3 whitespace-nowrap">Edited</th>
                            <th className="px-3 py-3 whitespace-nowrap">Author</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-800">
                        {fileList_.map((file: any) => {
                            const createdAt = new Date(file._creationTime).toLocaleString();
                            const isHovered = hoveredId === file._id;

                            return (
                                <tr
                                    key={file._id}
                                    className="text-gray-300 even:bg-gray-900/30 hover:bg-gray-800/60 transition-colors"
                                    style={{ height: "56px" }}
                                >
                                    {/* Name with icon */}
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <FileIcon className="w-4 h-4 text-gray-500" />
                                            {file.fileName}
                                        </div>
                                    </td>

                                    {/* Created */}
                                    <td className="px-3 py-4 whitespace-nowrap  text-xs text-gray-400">
                                        {createdAt}
                                    </td>

                                    {/* Edited */}
                                    <td className="px-3 py-4 whitespace-nowrap text-gray-500">
                                        —
                                    </td>

                                    {/* Author */}
                                    <td
                                        className="px-3 py-4 whitespace-nowrap relative cursor-pointer"
                                        onMouseEnter={() => setHoveredId(file._id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        <Image
                                            src={user?.picture || "/vercel.svg"}
                                            height={30}
                                            width={30}
                                            alt="Author Avatar"
                                            className="rounded-full"
                                        />

                                        {/* Tooltip */}
                                        {/* {isHovered && (
                                            <div className="absolute left-1/2 -translate-x-1/2 top-10 
                                                bg-gray-900/90 backdrop-blur-md border border-gray-700
                                                px-2 py-1 rounded-md text-xs text-gray-200 shadow-lg whitespace-nowrap">
                                                {user?.given_name}
                                            </div>
                                        )} */}
                                        {isHovered && (
                                            <div
                                                className="
        absolute left-1/2 -translate-x-1/2 bottom-10
        bg-gray-900/90 backdrop-blur-md border border-gray-700
        px-2 py-1 rounded-md text-xs text-gray-200 shadow-lg 
        whitespace-nowrap pointer-events-none
    "
                                            >
                                                {user?.given_name}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Filelist;
