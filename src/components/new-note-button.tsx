"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog } from "./ui/dialog";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import NewNoteDialog from "./new-note-dialog";

function NewNoteButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger
        className={cn(
          "text-secondary transition-colors duration-200 ease-in-out hover:text-primary",
          className,
        )}
        onClick={() => setOpen(true)}
        title="Add note"
      >
        <Plus className="size-10 sm:size-12" />
      </DialogTrigger>

      <NewNoteDialog setOpen={setOpen} />
    </Dialog>
  );
}

export default NewNoteButton;
