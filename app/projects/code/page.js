import Nav from "@/app/ui/nav";
import Code from "@/app/ui/code";

const __code = `import Code from "@/app/ui/code";

const Page = () => {

    return <div id="__code-page">
        <Nav />
        <div className="w-full h-[calc(100vh-48px)] flex justify-center items-center">
            <Code code={__code} />
        </div>
    </div>

}

export default Page;`

const Page = () => {

    return <div id="__code-page">
        <Nav />
        <div className="w-full h-[calc(100vh-48px)] flex justify-center items-center">
            <div className="block">
                <h4 className="mb-4 uppercase">code block</h4>
                <Code code={__code} />
            </div>
        </div>
    </div>

}

export default Page;