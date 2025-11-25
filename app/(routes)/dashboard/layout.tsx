"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import SideNav from "./_components/SideNav";
import Image from "next/image";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isLoading } = useKindeBrowserClient();
  const convex = useConvex();
  const router = useRouter();
  const [isCheckingTeam, setIsCheckingTeam] = useState(true);

  useEffect(() => {
    const checkTeam = async () => {
      if (!user) return;
      try {
        const result = await convex.query(api.teams.getTeam, {
          email: user?.email,
        });

        if (!result?.length) {
          router.push("teams/create");
        }
      } catch (err) {
        console.error("Error checking team:", err);
      } finally {
        setIsCheckingTeam(false);
      }
    };

    if (!isLoading && user) {
      checkTeam();
    } else if (!isLoading && !user) {
      setIsCheckingTeam(false);
    }
  }, [user, isLoading, convex, router]);


  if (isLoading || isCheckingTeam) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0b0b0b] transition-all duration-500">
        <Image
          src="/kreazer-logo-main.png"
          alt="Kreazer logo"
          width={120}
          height={120}
          className="opacity-95 mb-4 animate-fade-in"
        />
        <p className="text-base text-neutral-400 font-medium animate-pulse tracking-wide">
          loading <span className="text-white">kreazer</span>...
        </p>
      </div>
    );
  }




  return (
    <div>

      {/* <div className="bg-black h-screen w-full"> */}
      <div className="grid grid-cols-4">
        <div className="bg-black h-screen w-72 fixed">
          <SideNav />
        </div>
        <div className="col-span-4 ml-72">{children}</div>
      </div>
      <Toaster />
    </div>
    // </div>
  );
}

export default DashboardLayout;
