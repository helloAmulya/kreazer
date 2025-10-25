"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Dashboard() {

  const { user }: any = useKindeBrowserClient()

  //  the below is used to get the user (data) from the db based on query defined in the user.tsx
  // const getUser = useQuery(api.user.getUser, { email: user?.email })

  // if user does not exist, create a new user
  const createUser = useMutation(api.user.createUser)


  const convex = useConvex();


  useEffect(() => {
    if (user) {

      checkUser()
      // console.log(getUser)
      // if (getUser?.length) {
      //   createUser({
      //     name: user.given_name,
      //     email: user.email,
      //     image: user.picture,
      //   }).then((res) => {
      //     console.log(res)
      //   })
      // }
    }
  }, [user])


  /*
     why we implemented the checkUser logic ??
     -> manual control over exactly when the user check runs
     -> this is only runs once when the kinde data is available and prevent unnecessary runs/checks
  */

  const checkUser = async () => {
    const res = await convex.query(api.user.getUser, { email: user?.email })
    if (!res?.length) {
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture,
      }).then((res) => {
        console.log(res)
      })
    }
  }

  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout </LogoutLink>
      </Button>
    </div>
  );
}

export default Dashboard;
