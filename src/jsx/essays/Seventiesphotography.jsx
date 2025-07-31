import InfoNoticeEssay from "../templates/InfoNoticeEssay"

export default function Narrowlanes() {
    return (
        <>
            <InfoNoticeEssay />
            <h1 className="essaytitle">A small selective review of a work inside an exhibition for 1970s photography</h1>
            <div className="essaycontent">
                <p>The 1970s decade was a very volatile time for governments, people, and oligarchs. There were humongous pitfalls during the decade, such as the Vietnam War or major political scandals. To depict these phenomena in various mediums, photography played a critical role in documenting moments where the world knew things would never be the same. Despite this, photographers of the public were still finding the time to sharpen their skills and show others the interesting moments of their lives. The National Gallery of Art’s exhibition titled “The ‘70s Lens: Reimagining Documentary Photography” displays this exact behavior through the influential photographs that transformed the 70s through the various, yet specific, captured scenes.</p>
                <p>Perhaps the most eye-catching and thought-provoking of these photographs is one that doesn’t fall into the category of everyday travel, strangers, or even objects. In this odd accumulation of action and unknown context, Gwenn Thomas photographed Joan Jonas in one of her many uncomfortable poses for her performance in “Twilight.” Despite the seeming randomness of this photograph, it has crucial context about Twilight which explains why Jonas is crouched inside a small metal hoop and a television set blares white light at her figure. On each side of the performances of Twilight would be a monitor, each displaying a different scene from two closed-circuit cameras. The monitor to the right of the stage would occasionally flicker blue while a spotlight directed into the camera would cause the monitor to shine white, giving enough light on the stage for Jonas, in the nude as seen here, to balance on her hips with her stomach down, motioning in a way reminiscent of swimming, then promptly dancing as if she were possessed by a demon.</p>
                <figure className="essayfigure">
                    <a
                        href="/media/essays/70sphotography/joanjonas.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="picture"
                            src="/media/essays/70sphotography/joanjonas.jpg"
                            alt=""
                        />
                    </a>
                    <figcaption className="essaycaption">Joan Jonas performs "Twilight" for Gwenn Thomas, 1975.<br /><b>Click on the image for a detailed view in a new tab.</b></figcaption>
                </figure>
                <p>This exciting but mysterious scene is only a fraction of the everyday artistic, familial, and disputably working-class nature of the exhibition’s photographs, all of which are worth seeing at least once to understand what being and feeling in the 1970s was really like, especially as someone born in a generation long distanced from the culture of glamour fashion, space exploration, prog rock, and health crises.</p>
                <p>The full exhibition can be seen <a href="https://www.nga.gov/exhibitions/70s-lens-reimagining-documentary-photography" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        </>
    )
}