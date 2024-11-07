import Nav from "@/app/ui/nav";
import Default from "./default";
import Advance from "./advance";

import styles from "@/app/styles/page.module.scss";

export default function Modal() {

    return (<>
        <Nav />
        <div className={`${styles.header} flex items-end`}>
            <h4 className="uppercase text-center w-full">custom modal</h4>
        </div>
        <div className={`${styles.content} flex justify-center items-center`}>
            <div className="block">
                <Default />
                <Advance />
            </div>
        </div>
    </>);

}