export default function Header() {
    return (
        <>
            <header className="header">
                <div>
                    <img src="/media/pics/sona.png" style={{height: "43px", marginRight: "8px", verticalAlign:"bottom"}} alt="The jakanz persona" className="header-img" />
                    <span className="header-title">jakanz</span>
                </div>
                <div id="navigation">
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="/">Home</a></li>
                            <li className="nav-item"><a href="/contact">Contact</a></li>
                            <li className="nav-item"><a href="/directory">Directory</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <hr style={{margin: "0", width: "100%"}} />
        </>
    )
}
