import Image from "next/image";
import Nav from "@/app/ui/nav";

import styles from "@/app/styles/page.module.scss";
import Link from "next/link";

const Page = () => {

    return (<div id="__projects-page">
        <Nav />
        <div className={styles.header}>
            <div className="flex items-center">
                <Image src="/assets/projects.svg" alt="blogs alt" width={80} height={80} />
                <div className="w-full px-4">
                    <h4 className="uppercase">projects</h4>
                    <p className="italic">{`few things I've done along the way.`}</p>
                </div>
            </div>
        </div>
        <div id="__projects" className={`${styles.content} flex justify-center items-center`}>
            <Link href="/projects/modal" className="px-4">custom modal</Link>
            <Link href="/projects/code" className="px-4">code block</Link>
            <Link href="/projects/dropdown" className="px-4">custom dropdown</Link>
            <Link href="/projects/input" className="px-4">custom input</Link>
        </div>
    </div>);

}

export default Page;