"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "@/app/styles/nav.module.scss"

const Nav = (props) => {

    const pathname = usePathname();
    const [load, setLoad] = useState(false);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {

        if (pathname || routes.length === 0 && load === false) {

            const arr = pathname.split('/');
            const __routes = arr.filter(route => route !== '');
            setRoutes([...__routes]);

        }

        return () => setLoad(true);

    }, [pathname]);

    return (<div id="__nav"
        className={styles.wrapper}>
        <ol className={styles.nav}>
            <li>
                <Link href="/">
                    <Image src="/assets/logo.png" alt="logo alt" width={14} height={14} />
                </Link>
            </li>
            <>
                {
                    routes.map((route, index) => {

                        if (index < routes.length - 1)
                            return (<li key={index}>
                                <Link href={`/${route}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path d="m9.5 7 5 5-5 5" />
                                    </svg>
                                    {
                                        route
                                    }
                                </Link>
                            </li>);
                        else
                            return (<li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="m9.5 7 5 5-5 5" />
                                </svg>
                                {
                                    route
                                }
                            </li>)
                    })
                }
            </>
        </ol>
    </div>);

}

export default Nav;