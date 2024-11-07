import Nav from "@/app/ui/nav";

import DropdownLeft from "./left";
import DropdownRight from "./right";

import styles from "@/app/styles/page.module.scss";

const DropdownPage = () => {

    return (<>
        <Nav />
        <div className={`${styles.header} flex justify-center items-end`}>
            <h4 className="uppercase">custom dropdown</h4>
        </div>
        <div className={`${styles.content} flex justify-center items-center`}>
            <div className="w-full md:w-1/2 grid md:grid-cols-2">
                <DropdownLeft />
                <DropdownRight />
            </div>
        </div>
    </>);

}

export default DropdownPage;