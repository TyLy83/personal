"use client"
import React, { useState, useContext, useEffect, useRef, createContext } from "react";

import styles from "@/app/styles/dropdown.module.scss";

const Context = createContext({});

const Dropdown = ({ children }) => {

    const { shown, setShow, id, className } = useContext(Context);
    const ref = useRef(null);

    // handle outside click
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [ref]);

    return (<div className="relative"
        id={`__dp-${id}`}>
        <div className={`${shown === true ? styles.shown : styles.default} ${className}`}
            ref={ref}>
            {
                children
            }
        </div>
    </div>)

}

const Provider = ({ shown, setShow, children, id = "", className="" }) => {

    return (<Context.Provider value={{ shown, setShow, id, className }}>
        <Dropdown>
            {
                children
            }
        </Dropdown>
    </Context.Provider>);

}

export default Provider;