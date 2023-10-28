import Link from "next/link";
import { SignInButton, SignOutButton } from "./buttons";

const Navbar = () => {
  return (
    <div className="flex bg-purple-900 h-16 items-center text-xl">
      <div className="ml-5">
        <h1>Expenses Tracker</h1>
      </div>

      <div className="flex ml-auto mr-5 space-x-5">
        <Link href='/expenses'>
          <h3>Expenses</h3>
        </Link>
        <h3>Income</h3>
        <Link href='/wishlist'>
        <h3>Wishlist</h3>
        </Link>
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
};

export default Navbar;
