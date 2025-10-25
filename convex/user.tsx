
//  this is server side file to 
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

//  to retrieve user data from database
export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    return result;
  },
});

//  the mutation allows to modify the database and create a user
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("user", args);
  },
})
