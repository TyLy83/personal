import Image from "next/image";
import Link from "next/link";

export default function Home() {

	return (<div id="__page-home">
		<div id="__home-logo" className="w-full h-[20px] fixed top-8 left-8">
			<Image src="/assets/logo.png" alt="logo alt" width={20} height={20} />
		</div>
		<div className="w-full h-[calc(100vh-20px)] flex justify-center items-center overflow-y-auto">
			<div className="w-full md:w-1/2 flex flex-col md:flex-row">
				<div className="flex flex-col items-center md:items-start">
					<Image src="/assets/user.svg" alt="user alt" width={100} height={100} />
					<hr className="mb-2" />
					<p className="mb-4">Hello, I am a web developer from Auckland City, New Zealand.</p>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Link href="/blogs" className="mb-4">
						<Image src="/assets/blogs.svg" alt="blogs alt" width={120} height={120} />
					</Link>
					<Link href="/projects" className="mb-4">
						<Image src="/assets/projects.svg" alt="projects alt" width={120} height={120} />
					</Link>
				</div>
			</div>
		</div>
	</div>);

}