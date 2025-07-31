import InfoNoticeEssay from "../templates/InfoNoticeEssay"

export default function Narrowlanes() {
    return (
        <>
            <InfoNoticeEssay />
            <h1 className="essaytitle">Comparing Rococo to Neoclassicism: a contrast between Fragonard and Charpentier</h1>
            <div className="essaycontent">
                <p className="indent-0 text-center">The two paintings in this discussion are “The Progress of Love: The Meeting” by Jean-Honoré Fragonard (left), and “Melancholy” by Constance Marie Charpentier (right).</p>
                <div className="flex justify-center items-start gap-2 w-full my-4 text-center">
                    <div className="flex items-center h-full">
                        <a href="/media/essays/rococo/fragonard.jpg" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/media/essays/rococo/fragonard.jpg"
                                alt="Fragonard"
                                className="max-h-[500px] w-auto object-contain picture"
                            />
                        </a>
                    </div>
                    <div className="flex items-center h-full">
                        <a href="/media/essays/rococo/charpentier.jpg" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/media/essays/rococo/charpentier.jpg"
                                alt="Charpentier"
                                className="max-h-[500px] w-auto object-contain picture"
                            />
                        </a>
                    </div>
                </div>
                <p className="indent-0 text-center text-[0.8rem]">Click on the images for a detailed view in a new tab.</p>
                <p>Despite the fact that these two paintings are only some 30 years between each other by French painters, both of them made within each other’s lifespans, they show distinct characteristics of Rococo and Neoclassical paintings respectively. In Fragonard’s piece, to put it in rather crucial context, it is one panel of four that show the progression of young love and were painted for Madame du Barry, King Louis XV’s mistress. The painting also wasn’t meant to be viewed on its own, namely speaking that the painting was intended to be placed next to a window so the dense environment in the painting would match the outside of its showcasing room. Since this is still largely influenced by spirituality and mythical figures, there is a statue of Venus withholding her son Cupid’s quiver of arrows, which seem to connect the two young lovers in the painting by forming a triangle -- more appropriately, two separate arrows pointing towards the statue. Evident by the vibrant colors and use of curvature, this painting represents the happy frolicking ideals of the Rococo era, especially in France where it originated.</p>
                <p>The other painting here by Charpentier, despite a 30 year gap between it and Fragonard’s work, displays diametrically different ideals and styles. To put in context why this painting is significant and subversive in its nature, Charpentier frequented Salons, a common French tradition that are essentially art galleries, and would share “Melancholy” with her fellow artists in the Salon of 1801. However, even in Salons and following the French Revolution of 1789-1799, she faced misogynistic attitudes and dismissal from male artists. She received some amount of praise, but it was undermined by the amount received by her male peers. It is because of this ignorance that her painting, of a woman wallowing in a dim and unknown environment showing her mental state, bore a new meaning for both Charpentier and French feminists, being the melancholy experienced by other women at the time, which subverted the expectations of many Neoclassical paintings that were seemingly masculine-leaning in nature. The allegorical nature of the woman’s odd proportions, dark environment, and drabby nature behind her suggest many of the same simplistic, harmonic, yet restrictive attitudes that a Neoclassical artist of the time might have displayed.</p>
                <p>To contrast, both “The Meeting” and “Melancholy” display certain emotions and attitudes using their characters and backgrounds. For Fragonard, he represents love and stealth with facial expressions, gestures, lines, mythology, and vibrant backgrounds. For Charpentier, she represents depression, dread, and hopelessness with the lack of facial expressions and gestures, while displaying these traits with dim backgrounds and nature that is associated with gloominess. The woman in Charpentier’s work is solitary and in deep introspection, while the facial expressions of the young lovers in Fragonard’s work are dynamic and seem to suggest something restricting them from being physically together in that moment.</p>
            </div>
        </>
    )
}