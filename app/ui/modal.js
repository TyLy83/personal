"use client"
import React, { createContext, useContext, useRef, useEffect } from "react";

import styles from "@/app/styles/modal.module.scss";

const Context = createContext({});

const Component = ({ children }) => {

    const ref = useRef();
    const { open, setOpen } = useContext(Context);

    // handle outside click
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [ref]);

    return (<div id="__modal"
        className={open === true ? styles.active : styles.default}>
        <div ref={ref}
            id="__modal-wrapper"
            className={styles.wrapper}>
            <div id="__modal-content"
                className={styles.content}>
                {
                    children
                }
            </div>
        </div>
    </div>);

}

export default function Modal({ children, header, footer, ...props }) {

    return (<Context.Provider value={{ ...props }}>
        <Component>
            {header && <div id="__header" className={styles.header}>{header}</div>}
            {children}
            {footer && <div id="__footer" className={styles.footer}>{footer}</div>}
        </Component>
    </Context.Provider>);

}