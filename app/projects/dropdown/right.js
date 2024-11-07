"use client"
import React, { useState } from "react";
import Link from "next/link";

import Dropdown from "@/app/ui/dropdown";

const DropdownRight = () => {

    const [right, setRight] = useState(false);

    return (<div className="relative">
        <div className="mb-4 text-black uppercase text-right">
            right corner
        </div>
        <div className="text-right">
            <button onClick={() => setRight(true)}
                className="p-2 rounded-md ring-1 ring-slate-400 text-slate-500">
                <svg className="size-4 stroke-slate-500 fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84Z" />
                </svg>
            </button>
        </div>
        <Dropdown className="w-full top-1 right-0"
            setShow={setRight}
            shown={right}>
            <ol className="uppercase font-semibold">
                <li className="px-4 py-3">
                    <Link href="/projects/dropdown">Profile</Link>
                </li>
                <li className="px-4 py-3">
                    <Link href="/projects/dropdown">Account</Link>
                </li>
                <li className="px-4 py-3 border-t">
                    <Link href="/projects/dropdown">log out</Link>
                </li>
            </ol>
        </Dropdown>
    </div>)
}

export default DropdownRight;