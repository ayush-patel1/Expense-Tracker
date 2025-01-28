'use client'
import React,{useState,useEffect}from "react"
import { UserButton ,useUser} from "@clerk/nextjs"
import CardInfo from "./_components/CardInfo";
import { getTableColumns } from "drizzle-orm";
import { Budgets } from "../../../../utils/schema";
import { BarChartDashboard} from "lucide-react";
function Dashboard(){
    const {user}=useUser();
    const [budgetList,setBudgetList]=useState([]);
    const [incomeList,setIncomeList]=useState([]);
    const [expenseList,setExpenseList]=useState([]);

    useEffect(()=>{
      user && getBudgetList(user.id).then((data)=>setBudgetList(data))
    },[user])

    const getBudgetList=async()=>{
      const result=await db.select({
        ...getTableColumns(Budgets),
        totalSpend:sql`sum(${expenses.amount})`.mapWith(Number),
        totalItem:sql`count(${expenses.id})`.mapWith(Number),
      }).from(Budgets).leftJoin(expenses,eq(Budgets.id,expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)).groupBy(Budgets.id).orderBy(desc(Budgets.id));

      setBudgetList(result);
      getAllExpenses();
      getIncomeList();
    }

    const getAllExpenses=async()=>{
      const result=await db.select({
         id:expenses.id,
         name:expenses.name,
         amount:expenses.amount,
         createdAt:expenses.createdAt,
      }).from(Budgets).rightJoin(expenses,eq(Budgets.id,expenses.budgetId)).where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(expenses.id)); 
      setExpenseList(result);
      
    }

    const getIncomeList = async () => {
      try {
        const result = await db
          .select({
            ...getTableColumns(Incomes),
            totalAmount: sql`SUM(CAST(${Incomes.amount} AS NUMERIC))`.mapWith(
              Number
            ),
          })
          .from(Incomes)
          .groupBy(Incomes.id); 
  
        setIncomeList(result);
      } catch (error) {
        console.error("Error fetching income list:", error);
      }
    };

   return(
     <div className="p-8 ">
         <h2 className="font-bold text-4xl">Hi,{user?.fullName}</h2>
         <p className="pt-2 text-gray-600"> Your money, your story! Track, plan, and conquer your expenses—your goals are just a step away. 🚀</p>
         <CardInfo budgetList={budgetList} incomeList={incomeList}/>
         <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
            <div className="lg:col-span-2 ">
               <BarChartDashboard budgetList={budgetList}/>
               <ExpenseListTable expenseList={expenseList} refreshData={()=>getBudgetList()}/>
            </div>
            <div className="grid gap-5">
              <h2 className="font-bold text-lg">
                  Latest Budgets
              </h2>
              {
                budgetList?.length > 0 ? budgetList.map((budget, index) => (
                  <BudgetItem budget={budget} key={index}/>
                )) :[1,2,3,4].map((item,index)=>( 
                  <div className="h-[180xp] w-full bg-slate-200 lg">
                ))}
              }
            </div>
         </div>
     </div>
   )
}
export default Dashboard


// 2:16:55