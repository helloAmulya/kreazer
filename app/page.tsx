"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect } from "react";

export default function Home() {
  // can use this to extract data from the session like name, id etc.
  const { user } = useKindeBrowserClient(); // no required for now

  useEffect(() => {
    console.log("--", user);
  }, [user]);
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
    </>
  );
}
