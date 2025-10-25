"use client"

import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { Toaster } from 'sonner';

function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user }: any = useKindeBrowserClient()
    const convex = useConvex()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            checkTeam()
        }
    }, [user])


    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeam,
            { email: user?.email });

        if (!result?.length) {

            // todo: add a screen while redirecting
            router.push('teams/create')
        }
    }
    return (
        <div>{children}
            <Toaster />
        </div>

    )
}

export default DashboardLayout

