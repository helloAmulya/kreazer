import { FileListContext } from '@/app/_context/FileListContext';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

function Filelist() {
    const { user }: any = useKindeBrowserClient();
    const { fileList_ } = useContext(FileListContext);

    const [hoveredId, setHoveredId] = useState<string | null>(null);

    if (!fileList_ || fileList_.length === 0) {
        return (
            <div className="mt-10 text-gray-400 text-sm text-center">
                No files yet.
            </div>
        );
    }

    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-gray-900/40 text-left">
                        <tr className="text-gray-200 font-medium">
                            <th className="px-3 py-3 whitespace-nowrap">Name</th>
                            <th className="px-3 py-3 whitespace-nowrap">Created</th>
                            <th className="px-3 py-3 whitespace-nowrap">Edited</th>
                            <th className="px-3 py-3 whitespace-nowrap">Author</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-800">
                        {fileList_.map((file: any) => {
                            const createdAt = new Date(file._creationTime).toLocaleString();
                            const isHovered = hoveredId === file._id;

                            return (
                                <tr
                                    key={file._id}
                                    className="text-gray-300 even:bg-gray-900/30"
                                >
                                    <td className="px-3 py-3 whitespace-nowrap">
                                        {file.fileName}
                                    </td>

                                    <td className="px-3 py-3 whitespace-nowrap">
                                        {createdAt}
                                    </td>

                                    <td className="px-3 py-3 whitespace-nowrap">
                                        —
                                    </td>

                                    <td
                                        className="px-3 py-3 whitespace-nowrap relative cursor-pointer"
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

                                        {isHovered && (
                                            <div className="absolute left-1/2 -translate-x-1/2 top-8
                                                bg-gray-800 text-white px-2 py-1
                                                rounded-md text-xs whitespace-nowrap shadow">
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



// import { FileListContext } from '@/app/_context/FileListContext';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import { div, p } from 'motion/react-client';
// import Image from 'next/image';
// import React, { useContext, useEffect, useState } from 'react'

// function Filelist() {

//     const { user }: any = useKindeBrowserClient();
//     const { fileList_, setFileList_ } = useContext(FileListContext);
//     const [fileList, setFileList] = useState();


//     const [showname, setShowname] = useState(false)


//     useEffect(() => {
//         fileList_ && setFileList(fileList_)
//         console.log(fileList_)
//     }, [fileList_])

//     return (
//         <div className='mt-10'>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-800">
//                     <thead className="ltr:text-left rtl:text-right bg-gray-900/40">
//                         <tr className="*:font-medium *:text-gray-200">
//                             <th className="px-3 py-3 whitespace-nowrap">Name</th>
//                             <th className="px-3 py-3 whitespace-nowrap">Created</th>
//                             <th className="px-3 py-3 whitespace-nowrap">Edited</th>
//                             <th className="px-3 py-3 whitespace-nowrap">Author</th>
//                         </tr>
//                     </thead>

//                     {/* {fileList_ && <tbody className="divide-y divide-gray-800"> */}

//                     {/* {user &&
//                             <tr className="*:text-gray-300 *:first:font-medium even:bg-gray-900/30">
//                                 <td className="px-3 py-3 whitespace-nowrap">Nandor the Relentless</td>
//                                 <td className="px-3 py-3 whitespace-nowrap">04/06/1262</td>
//                                 <td className="px-3 py-3 whitespace-nowrap">Vampire Warrior</td>

//                                 <td
//                                     className="px-3 py-3 whitespace-nowrap cursor-pointer relative"
//                                     onMouseEnter={() => { setShowname(true) }}
//                                     onMouseLeave={() => { setShowname(false) }}
//                                 >
//                                     <Image
//                                         src={user?.picture || "/vercel.svg"}
//                                         height={30}
//                                         width={30}
//                                         alt="user"
//                                         className="rounded-full"
//                                     />
//                                     {
//                                         showname &&
//                                         (
//                                             <div className='absolute right-3/5 -translate-x-1/2 top-8 
//                     bg-none text-white px-2 py-1 
//                     rounded-md text-xs whitespace-nowrap '>{user?.given_name}</div>
//                                         )
//                                     }


//                                 </td>

//                             </tr>} */}



//                     {/* <tr className="*:text-gray-300 *:first:font-medium even:bg-gray-900/30">
//                             <td className="px-3 py-3 whitespace-nowrap">{fileList_?.fileName}</td>
//                             <td className="px-3 py-3 whitespace-nowrap">{fileList_?.createdAt}</td>
//                             <td className="px-3 py-3 whitespace-nowrap">Vampire Warrior</td>

//                             <td
//                                 className="px-3 py-3 whitespace-nowrap cursor-pointer relative"
//                                 onMouseEnter={() => { setShowname(true) }}
//                                 onMouseLeave={() => { setShowname(false) }}
//                             >
//                                 <Image
//                                     src={user?.picture || "/vercel.svg"}
//                                     height={30}
//                                     width={30}
//                                     alt="user"
//                                     className="rounded-full"
//                                 /> */}
//                     {/* {
//                                         showname &&
//                                         (
//                                             <div className='absolute right-3/5 -translate-x-1/2 top-8 
//                     bg-none text-white px-2 py-1 
//                     rounded-md text-xs whitespace-nowrap '>{user?.given_name}</div>
//                                         )
//                                     } */}


//                     {/* </td> */}

//                     {/* </tr> */}

//                     {/* </tbody>} */}



//                 </table>
//             </div>

//         </div>
//     )
// }

// export default Filelist