import { v } from "convex/values"
import { mutation, query } from "./_generated/server"


export const createFile = mutation({
    args: {
        fileName: v.string(),
        teamId: v.string(),
        createdBy: v.string(),
        archive: v.boolean(),
        document: v.string(),
        whiteBoard: v.string(),
    },
    handler: async (ctx, args) => {
        const res = await ctx.db.insert("files", args)
        return res
    }
})

export const deleteFile = mutation({
    args: {
        fileId: v.id("files")
    },
    handler: async (ctx, args) => {
        const res = await ctx.db.delete(args.fileId)
        return res
    }
})


export const getFiles = query({
    args: {
        teamId: v.string(),
    },
    handler: async (ctx, args) => {
        const res = await ctx.db.query("files")
            .filter(q => q.eq(q.field("teamId"), args.teamId))
            .collect();
        return res
    }
})


// export const createFile = mutation({
//     args: {
//         fileName: v.string(),
//         teamId: v.string(),
//         createdBy: v.string(),
//         archive: v.optional(v.boolean()),
//         document: v.optional(v.string()),
//         whiteBoard: v.optional(v.string()),
//     },
//     handler: async (ctx, args) => {
//         const res = await ctx.db.insert("files", {
//             ...args,
//             archive: args.archive ?? false,
//             document: args.document ?? "",
//             whiteBoard: args.whiteBoard ?? "",
//         })
//         return res
//     }
// })

