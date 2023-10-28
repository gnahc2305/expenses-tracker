import ExpensesCard from "@/components/expenses-card";
import { getServerSession } from "next-auth";

const Expenses = async () => {
  const session = await getServerSession();

  if (!session) {
    return <p>You must be signed in...</p>;
  }

  return (
    <div className="">
      <div className="flex m-5 ">
        <button className='bg-green-400 text-black p-2 rounded-md'>Create New Expense</button>
        <div className="ml-auto flex space-x-5">
          <h1>Total Expenses: </h1>
          <h1>Monthly Expenses: </h1>
        </div>
      </div>

      <div className="m-5">
        <ExpensesCard />
      </div>
    </div>
  );
};

export default Expenses;
