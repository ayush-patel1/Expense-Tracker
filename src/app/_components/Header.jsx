'use client'
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser,UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
    const {user,isSignedIn} = useUser()
    return (
        <div className="p-5 flex justify-between items-center border-gray-700 bg-gray-200 shadow-sm pl-10 pr-10">
          <div className="flex flex-row items-center">
            {/* {logo} */}
            <Image src={'/chart-donut.svg'} alt='logo' width={40} height={25}></Image>
            <span className="text-yellow-900 text-2xl tracking-wide font-extrabold">Smart Finance</span>
          </div>
          {isSignedIn?(<UserButton/>) : (<div className="flex flex-row items-center gap-4">
            <Link href="/dashboard"><Button className="bg-gray-400 rounded-full text-gray-900 font-bold hover:bg-gray-800 hover:text-yellow-500">Dashboard</Button></Link>
            <Link href="/sign-in"><Button  className="bg-gray-900 rounded-full text-gray-50 font-semibold hover:bg-gray-800 hover:text-yellow-500">Get started</Button></Link>
          </div>)}
        </div>
    )
}

export default Header