// // import formatNumber from "@/utils";
// // import getFinancialAdvice from "@/utils/getFinancialAdvice";
// import {
//   PiggyBank,
//   ReceiptText,
//   Wallet,
//   Sparkles,
//   CircleDollarSign,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";

// function CardInfo({ budgetList, incomeList }) {
//   const [totalBudget, setTotalBudget] = useState(0);
//   const [totalSpend, setTotalSpend] = useState(0);
//   const [totalIncome, setTotalIncome] = useState(0);
//   const [financialAdvice, setFinancialAdvice] = useState("");

//   useEffect(() => {
//     if (budgetList.length > 0 || incomeList.length > 0) {
//       CalculateCardInfo();
//     }
//   }, [budgetList, incomeList]);

//   useEffect(() => {
//     // if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
//     //   const fetchFinancialAdvice = async () => {
//     //     const advice = await getFinancialAdvice(
//     //       totalBudget,
//     //       totalIncome,
//     //       totalSpend
//     //     );
//     //     setFinancialAdvice(advice);
//     //   };

//     //   fetchFinancialAdvice();
//     // }
//   }, [totalBudget, totalIncome, totalSpend]);

//   const CalculateCardInfo = () => {
//     console.log(budgetList);
//     let totalBudget_ = 0;
//     let totalSpend_ = 0;
//     let totalIncome_ = 0;

//     budgetList.forEach((element) => {
//       totalBudget_ = totalBudget_ + Number(element.amount);
//       totalSpend_ = totalSpend_ + element.totalSpend;
//     });

//     incomeList.forEach((element) => {
//       totalIncome_ = totalIncome_ + element.totalAmount;
//     });

//     setTotalIncome(totalIncome_);
//     setTotalBudget(totalBudget_);
//     setTotalSpend(totalSpend_);
//   };

//   return (
//     <div>
//       {budgetList?.length > 0 ? (
//         <div>
//         {/* <div className="p-7 border mt-4 rounded-2xl flex items-center justify-between">
//             <div>
//                 <div className="flex mb-2 flex-row space-x-1 items-center">
//                   <h2>Smart Finance AI</h2>
//                   <Sparkles className="rounded-full text-white w-10 h-10 p-2
//                   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"/>
//                 </div>
//             </div>

//         </div>
//         </div>
//       ):()} */}
//     </div> 
//   );
// }

// export default CardInfo;