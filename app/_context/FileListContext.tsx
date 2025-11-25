"use client";

import { createContext, useState } from "react";

export const FileListContext = createContext<any>(null);

export function FileListContextProvider({ children }: any) {
    const [fileList_, setFileList_] = useState([]);

    return (
        <FileListContext.Provider value={{ fileList_, setFileList_ }}>
            {children}
        </FileListContext.Provider>
    );
}
