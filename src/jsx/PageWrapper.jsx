function Header() {
    return (
        <>
            <header className="flex items-center h-11 font-bold text-center justify-center xs:justify-between">
                <div className="hidden xs:flex items-end">
                    <img
						src="/media/icons/sona.png"
						className="h-11"
						alt="The jakanz persona"
					/>
                    <span className="text-[1.8rem] bg-header gradient pl-2">jakanz</span>
                </div>
                <nav>
                    <ul className="flex list-none items-center text-[1.5rem]">
                        <li><a href="/">Home</a></li>
                        <li className="mx-2 text-[#d1d1d1]">|</li>
                        <li><a href="/dir?list=contacts">Contact</a></li>
                        <li className="mx-2 text-[#d1d1d1]">|</li>
                        <li><a href="/dir">Directory</a></li>
                    </ul>
                </nav>
            </header>
            <hr />
        </>
    );
}

function Footer() {
    return (
        <>
			<hr />
			<p className="my-4 text-center">
				Website developed with React + Tailwind, no rights reserved. <a href="https://github.com/jakanz/jakanz.github.io" target="_blank" rel="noopener noreferrer">Check out the source code</a>
			</p>
        </>
    )
}

export default function PageWrapper({children}) {
  	return (    
    	<div className="bg-main pt-8 px-10 pb-[1px] max-w-[50rem] mx-auto">
        	<Header />
        	<main>{children}</main>
        	<Footer />
    	</div>    
  	);
}
