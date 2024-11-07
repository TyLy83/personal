import Image from "next/image";
import Nav from "@/app/ui/nav";

import styles from "@/app/styles/page.module.scss";

const Page = () => {

    return (<div id="__blog-page" className="overflow-hidden">
        <Nav />
        <div className={styles.header}>
            <div className="flex items-center">
                <Image src="/assets/blogs.svg" alt="blogs alt" width={80} height={80} />
                <div className="w-full px-4">
                    <h4 className="uppercase">blogs</h4>
                    <p className="italic">{`what I've learned along the way.`}</p>
                </div>
            </div>
        </div>
        <div id="__blogs" className={styles.content}>

        </div>
    </div>);

}

export default Page;