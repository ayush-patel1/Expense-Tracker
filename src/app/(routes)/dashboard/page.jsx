'use client'
import React,{useState,useEffect}from "react"
import { UserButton ,useUser} from "@clerk/nextjs"
import CardInfo from "./_components/CardInfo";
function Dashboard(){
    const {user}=useUser();
   return(
     <div className="p-8 ">
         <h2 className="font-bold text-4xl">Hi,{user?.fullName}</h2>
         <p className="pt-2 text-gray-600"> Your money, your story! Track, plan, and conquer your expenses—your goals are just a step away. 🚀</p>
         {/* <CardInfo/> */}
     </div>
   )
}
export default Dashboard