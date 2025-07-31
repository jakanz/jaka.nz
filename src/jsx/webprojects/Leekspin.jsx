import { useEffect, useState } from "react"

export default function Leekspin() {
    const [spins, setSpins] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSpins(prevSpins => prevSpins + 1);
        }, 320);
        return () => clearInterval(interval);
    }, []);

    return (
        <>        
            <title>leekspin</title>
            <link
                href="/media/goofs/leekspin/leek.png"
                rel="icon"
                type="image/icon type"
            />
            <div className="flex flex-col items-center py-5">
                <img
                    src="/media/goofs/leekspin/leekspin.gif"
                    alt="Leekspin animation, lady with grocery bags in one hand is spinning a leek in her other hand. If you're seeing this, your browser didn't render this properly - refresh!"
                />
                <p className="mt-5">You have witnessed <b>{spins}</b> spins!</p>
            </div>            
        </>
    )
}