"use client"
import React, { useState } from "react";

import Input from "@/app/ui/input";

export default function Default() {

    const [value, setValue] = useState(null);

    return (<div className="mb-4 block">
        <Input onChange={(e) => setValue(e.target.value)}
            name="default"
            label="default input"
            value={value ? value : ""} />
    </div>);

}