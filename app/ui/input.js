"use client"
import React, { useState, createContext, useContext, useRef, useEffect } from "react";

import styles from "@/app/styles/input.module.scss";


const Context = createContext({});
const LabelProps = createContext({});
const InputProps = createContext({});

const Label = () => {

    const { label, left } = useContext(LabelProps);

    return (<label className={left}>
        {
            label
        }
    </label>);

}

const InputEl = () => {

    const ref = useRef(null);
    const props = useContext(InputProps);
    const { focus, setFocus } = useContext(Context);

    useEffect(() => {

        if (focus === true)
            ref.current && ref.current.focus();

    }, [props])

    return (<input {...props}
        ref={ref}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
    />);

}

export default function Input({ label = "", name = "", value = "", startIcon, endIcon, ...props }) {

    const ref = useRef(null);
    const [load, setLoad] = useState(false);
    const [focus, setFocus] = useState(false);

    // handle outside click
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setFocus(false);
        }
    };

    useEffect(() => {

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [ref]);

    useEffect(() => {

        if (value && load === false) {

            setFocus(true);

        }

        return () => setLoad(true);

    }, [load]);

    return (<Context.Provider value={{ focus, setFocus }}>
        <div className={value || focus === true ? styles.focus : styles.input}
            id={`__input-${name}`}
            onClick={() => setFocus(true)}
            ref={ref}>
            <>
                {
                    startIcon && <div className={styles.startIcon}>
                        {startIcon}
                    </div>
                }
            </>
            <div className="w-full px-4 relative">
                <LabelProps.Provider value={{ label, left: startIcon && (value || focus === true) ? '!-left-12' : '' }}>
                    <Label />
                </LabelProps.Provider>
                <InputProps.Provider value={{ ...props, name, value }}>
                    <InputEl />
                </InputProps.Provider>
            </div>
            <>
                {
                    endIcon && <div className={styles.endIcon}>
                        {endIcon}
                    </div>
                }
            </>
        </div>
    </Context.Provider>);

}