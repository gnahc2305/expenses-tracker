import { getServerSession } from "next-auth";

const Wishlist = async () => {
  const session = await getServerSession();

  if (!session) {
    return <p>You must be signed in...</p>;
  }

  return (
    <div>
      <div className="flex m-5 ">
        <button className='bg-green-400 text-black p-2 rounded-md'>New product</button>
      </div>

      <div className="">

      </div>
    </div>
  );
};

export default Wishlist;
