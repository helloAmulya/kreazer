"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Dashboard() {

  const { user }: any = useKindeBrowserClient()

  //  the below is used to get the user (data) from the db based on query defined in the user.tsx
  const getUser = useQuery(api.user.getUser, { email: user?.email })

  // if user does not exist, create a new user
  const createUser = useMutation(api.user.createUser)
  
  useEffect(() => {
    if (user) {
      // console.log(getUser)
      if (getUser == undefined) {
        createUser({
          name: user.given_name,
          email: user.email,
          image: user.picture,
        }).then((res) => {
          console.log(res)
        })
      }

    }
  }, [user])
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
