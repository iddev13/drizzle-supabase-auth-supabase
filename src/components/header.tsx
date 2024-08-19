import { getUser } from "@/lib/auth";
import { Lilita_One } from "next/font/google";
import UserButton from "./user-button";
import NewNoteButton from "./new-note-button";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

async function Header() {
  const user = await getUser();

  return (
    <header className="relative mx-auto mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-lg bg-popover px-4">
      <UserButton user={user} />

      <h1 className={`text-4xl text-secondary sm:text-5xl ${lilita.className}`}>
        Fire Notes
      </h1>

      <NewNoteButton />
    </header>
  );
}

export default Header;
