'use client'
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser,UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
    const {user,isSignedIn} = useUser()
    return (
        <div className="p-5 flex justify-between items-center border border-gray-400 bg-gray-800 shadow-sm">
          <div className="flex flex-row items-center">
            {/* {logo} */}
            <Image src={'/chart-donut.svg'} alt='logo' width={40} height={25}></Image>
            <span className="text-yellow-500 text-lg font-extrabold">Smart Finance</span>
          </div>
          {isSignedIn?(<UserButton/>) : (<div className="flex flex-row items-center gap-4">
            <Link href="/dashboard"><Button className="bg-gray-800 rounded-full text-gray-50 hover:bg-gray-800 hover:text-yellow-500">Dashboard</Button></Link>
            <Link href="/dashboard"><Button  className="bg-gray-900 rounded-full text-gray-50 hover:bg-gray-800 hover:text-yellow-500">Get started</Button></Link>
          </div>)}
        </div>
    )
}

export default Header