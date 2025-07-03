export default function Trucksex() {
    return (
        <>
            <title>The iconic location of the Two Trucks image</title>
            <link href="/media/goofs/trucksex/truckicon.png" rel="icon" type="image/icon type" />
            
            <div className="main" style={{textAlign: "center", padding: "20px"}}>
                <div>
                    <img src="/media/goofs/trucksex/trucksex.png" style={{position: "absolute", width: "600px"}} id="trucksex" alt="If you're seeing this, your browser didn't render this properly - refresh!" />
                    <img src="/media/goofs/trucksex/todaysex.png" style={{width: "600px"}} alt="" />
                </div>
                <input id="slider" type="range" min="0" max="250" defaultValue="0" style={{width: "600px", margin: "4px 0 0 0"}} />
                <p style={{marginBottom: "0"}}><a href="https://goo.gl/maps/DcxJxZMKog1QEhzt5">See the original Google Maps view</a></p>
            </div>
            <script async src="/media/goofs/trucksex/trucksex.js" />
            
        </>
    )
}