import Link from "next/link";

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
        <h3>Wishlist</h3>
      </div>
    </div>
  );
};

export default Navbar;
