import Nav from "@/app/ui/nav";

import Default from "./default";
import StartIcon from "./start-icon";
import EndIcon from "./end-icon";
import TwoIcons from "./two-icons";

import styles from "@/app/styles/page.module.scss";

export default function Inputs() {

    return (<>
        <Nav />
        <div className={`${styles.header} flex justify-center items-end`}>
            <h4 className="w-full uppercase text-center">custom input fields</h4>
        </div>
        <div className={`${styles.content} flex justify-center items-center`}>
            <div className="w-full md:w-1/2 block">
                <Default />
                <StartIcon />
                <EndIcon />
                <TwoIcons />
            </div>
        </div>
    </>)

} 