import { PiggyBank,ReceiptText, Wallet,Sparkles,CircleDollarSign} from "lucide-react";

import React,{useEffect,useState} from "react";

function CardInfo({budgetList,incomeList}){
    const [totalBudget,setTotalBudget]=useState(0);
    const [totalSpend,setTotalSpend]=useState(0);
    const [totalIncome,setTotalIncome]=useState(0);
    const [financialAdvice,setFinancialAdvice]=useState("");
    useEffect(()=>{
     if(budgetList.length>0 || incomeList.length>0){
         let total=0;
         budgetList.forEach(budget=>{
             total+=budget.amount;
         })
         setTotalBudget(total);
     }

}