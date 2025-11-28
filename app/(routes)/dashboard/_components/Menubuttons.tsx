
"use client"

import { useState } from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Icons
import {
    LinkIcon,
    PencilIcon,
    ShareIcon,
    MoveIcon,
    CopyIcon,
    ArchiveIcon,
    Trash2Icon,
} from "lucide-react";

import {
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useMutation } from "convex/react"

export function DropdownMenuDialog() {
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" aria-label="Open menu" size="icon-sm">
                        <MoreHorizontalIcon />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>File Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                            New File...
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
                            Share...
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>Download</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* New File Dialog */}
            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New File</DialogTitle>
                        <DialogDescription>
                            Provide a name for your new file. Click create when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="pb-3">
                        <Field>
                            <FieldLabel htmlFor="filename">File Name</FieldLabel>
                            <Input id="filename" name="filename" placeholder="document.txt" />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button>Create</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Share Dialog */}
            <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Share File</DialogTitle>
                        <DialogDescription>
                            Anyone with the link will be able to view this file.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="py-3">
                        <Field>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="shadcn@vercel.com" autoComplete="off" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
                            <Textarea id="message" placeholder="Check out this file" />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button>Send Invite</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}





export default function FileOptionsMenu({ file }: any) {

    const { user } = useKindeBrowserClient();
    const deleteFile = useMutation(api.files.deleteFile);
    const [confirmDelete, setConfirmDelete] = useState(false);

    // const isOwner = user?.email === file.createdBy;
    const isOwner = user?.email === file?.createdBy;


    const handleDelete = async () => {
        await deleteFile({ fileId: file._id });
        setConfirmDelete(false);
    };


    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                        <LinkIcon className="mr-2 h-4 w-4" /> Copy Link
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <PencilIcon className="mr-2 h-4 w-4" /> Rename
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <ShareIcon className="mr-2 h-4 w-4" /> Share
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <MoveIcon className="mr-2 h-4 w-4" /> Move
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <CopyIcon className="mr-2 h-4 w-4" /> Duplicate
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <ArchiveIcon className="mr-2 h-4 w-4" /> Archive
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        disabled={!isOwner}
                        className="text-red-500 focus:text-red-600"
                        onSelect={() => isOwner && setConfirmDelete(true)}
                    >
                        <Trash2Icon className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Confirm Delete Dialog */}
            <Dialog open={confirmDelete} onOpenChange={setConfirmDelete}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete File?</DialogTitle>
                        <DialogDescription>
                            This action is permanent. You cannot undo this.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setConfirmDelete(false)}>
                            Cancel
                        </Button>

                        <Button variant="destructive" onClick={handleDelete}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
