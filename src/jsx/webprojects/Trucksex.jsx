import { useEffect, useRef } from "react";

export default function Trucksex() {
    const sliderRef = useRef(null);
    const trucksexRef = useRef(null);
    
    useEffect(() => {
        const slider = sliderRef.current;
        const trucksex = trucksexRef.current;

        function rangeValue() {
            if (trucksex && slider) {
                trucksex.style.opacity = (250 - slider.value) / 250;
            }
        }

        if (slider) {
            slider.addEventListener("input", rangeValue);
        }

        return () => {
            if (slider) {
                slider.removeEventListener("input", rangeValue);
            }
        };
    }, []);

    return (
       <>
            <title>The iconic location of the Two Trucks image</title>
            <link
                href="/media/goofs/trucksex/truckicon.png"
                rel="icon"
                type="image/icon type"
            />
            <div className="relative flex flex-col items-center py-5">
                <div>
                    <img
                        className="absolute w-full max-w-[37.5rem]"
                        src="/media/goofs/trucksex/trucksex.png"
                        id="trucksex"
                        alt="If you're seeing this, your browser didn't render this properly - refresh!"
                        ref={trucksexRef}
                    />
                    <img
                        className="w-full max-w-[37.5rem]"
                        src="/media/goofs/trucksex/todaysex.png"
                        alt=""
                    />
                </div>
                <input
                    className="w-full max-w-[42rem] my-2"
                    id="slider"
                    type="range"
                    min="0"
                    max="250"
                    defaultValue="0"
                    ref={sliderRef}
                />
                <p className="font-bold text-[1.2rem] text-center">
                    <a
                        href="https://goo.gl/maps/DcxJxZMKog1QEhzt5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See the original Google Maps view!
                    </a>
                </p>
            </div>
        </>
    )
}