"use client"
import React, { useState } from "react";

import Input from "@/app/ui/input";

export default function Default() {

    const [value, setValue] = useState(null);

    return (<div className="mb-4 block">
        <Input onChange={(e) => setValue(e.target.value)}
            name="default"
            label="two icon input"
            startIcon={<svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0v1.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5V12a9 9 0 1 0-9 9h4" />
            </svg>}
            endIcon={<svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0v1.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5V12a9 9 0 1 0-9 9h4" />
            </svg>}
            value={value ? value : ""} />
    </div>);

}