"use client"
import React, { useState } from "react";

import Modal from "@/app/ui/modal";

export default function Advance() {

    const [open, setOpen] = useState(false);

    return (<>

        <button onClick={() => setOpen(!open)}
            className="mb-4 px-6 py-3 block bg-black rounded-lg ring-1 ring-black text-white">
            advance
        </button>

        <Modal header={<div className="px-4 py-3 flex items-center">
            <h3>modal header</h3>
        </div>}
            footer={<div className="px-4 py-3">
                <h3>modal footer</h3>
            </div>}
            open={open}
            setOpen={setOpen}>
            <div className="p-4">
                <h4 className="mb-4 capitalize">What is Lorem Ipsum?</h4>
                <p className="mb-4">
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                </p>
            </div>
        </Modal>

    </>);

}