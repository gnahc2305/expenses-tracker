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
        <button className="bg-green-400 text-black p-2 rounded-md">
          Create New Expense
        </button>
        <div className="ml-auto flex space-x-5 items-center">
          <select name="currency" className="text-black h-[35px] rounded-md">
            <option value="soles">Soles</option>
            <option value="usd">Usd</option>
            <option value="cad">Cad</option>
          </select>

          <h1>Total Expenses: 100</h1>
          <h1>Monthly Expenses: 100</h1>
        </div>
      </div>

      <div className="m-5">
        <ExpensesCard />
      </div>
    </div>
  );
};

export default Expenses;
