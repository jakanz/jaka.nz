import InfoNoticeEssay from "../templates/InfoNoticeEssay"

const paintingData = {
    daumier: {
        artist: "Honoré Daumier",
        title: "Rue Transnonain, le 15 Avril 1834",
        timestamp: "August 1834",
        medium: "reproducible lithograph",
        src: "/media/essays/realism/daumier.jpg",
        alt: "'Rue Transnonain, le 15 Avril 1834' by Honoré Daumier",
        attribution: "Standard-size .JPG courtesy of the Cleveland Museum of Art",
    },
    courbet: {
        artist: "Gustave Courbet",
        title: "Les Casseurs de pierres (The Stone Breakers)",
        timestamp: "1849",
        medium: "oil on canvas",
        src: "/media/essays/realism/courbet.jpg",
        alt: "'Les Casseurs de pierres (The Stone Breakers)' by Gustave Courbet",
        attribution: "Courtesy of the Web Gallery of Art (appropriate use, educational purposes)",
    },
    repin: {
        artist: "Ilya Repin",
        title: "Бурлаки на Волге (Barge Haulers on the Volga)",
        timestamp: "1870-1873",
        medium: "oil on canvas",
        src: "/media/essays/realism/repin.jpg",
        alt: "'Бурлаки на Волге (Barge Haulers on the Volga)' by Ilya Repin",
        attribution: "Courtesy of John Petrov through LJ.Rossia.org, original journal deleted, image obtained via Wikimedia Commons",
    },
    millet: {
        artist: "Jean-Francois Millet",
        title: "Shepherdess with her Flock",
        timestamp: "c. 1863",
        medium: "oil on canvas",
        src: "/media/essays/realism/millet.jpg",
        alt: "'Shepherdess with her Flock' by Jean-Francois Millet",
        attribution: "Standard-size .JPG courtesy of Artchive",
    },
    breton: {
        artist: "Jules Breton",
        title: "Le Chant de l'alouette (The Song of the Lark)",
        timestamp: "1884",
        medium: "oil on canvas",
        src: "/media/essays/realism/breton.jpg",
        alt: "'Le Chant de l'alouette (The Song of the Lark)' by Jules Breton",
        attribution: "High-quality .JPG courtesy of the Art Institute of Chicago",
    },
}

function PaintingFigure({ artist }) {
    const painting = paintingData[artist];

    return (
        <figure className="essayfigure">
            <a
                href={painting.src}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="picture"
                    src={painting.src}
                    alt={painting.alt}
                />
            </a>
            <figcaption className="essaycaption">{painting.artist}, '<i>{painting.title}</i>', {painting.timestamp}, {painting.medium}<br />{painting.attribution}</figcaption>
        </figure>
    );
}

export default function Narrowlanes() {
    return (
        <>
            <InfoNoticeEssay />
            <h1 className="essaytitle">Depictions of the proletariat in Realist art: an exhibition</h1>
            <div className="essaycontent">
                <p>Furrowed brows, dirtiness, sickness, calloused hands, and wrinkles -- these are all traits of a common lower class plot worker. In the 19th century, with the rise of Realism as a contrarian art movement to Romanticism, paintings of the lower and working class became popular amongst artists wishing to publicly portray the reality of wage laborers and protest against the common practice of depicting well-off monarchs in positions of grandeur and romance. This exhibition wishes to show these works in their historical and cultural contexts, and to challenge the audience to see the realities of these workers as their gritty and honest souls can attest. Included in this exhibition includes the works of Jean-Francois Millet, Gustave Courbet, Ilya Repin, Jules Breton, and Honoré Daumier.</p>
                <p className="indent-0 text-center font-bold">Click on the images for a detailed view in a new tab.</p>
                <hr className="shortruler" />
                <PaintingFigure artist="daumier" />
                <p>Although Louis Philippe I was nicknamed the Citizen King, his government was quite unfriendly to the working class, going as far as to oppress efforts to earn rights to work and a fair salary. In Lyon in February 1834, the owners of silk factories had reduced workers’ salaries, sparking a rebellion amongst the workers in Paris. On the night of 13 April 1834, in the midst of protests demanding the acquittal of trials against leaders of the rebellion, French soldiers responded to sniper fire directed towards civil guards from the top of an apartment complex on the corner of rue Transnonain and rue de Montmorency. Soldiers entered the complex soon after, bursting into each apartment, and indiscriminately firing on the inhabitants inside, regardless of their ability or age. As a result, many people, including at least one paralyzed man and a 4-year-old, were killed. Daumier published this 28.6 x 44 cm lithograph of protest in the <i>L'Association Mensuelle</i> periodical, capturing four fallen people (including a toddler under the central figure). Government censors approved publication of Daumier’s piece, though there is at least one instance where public displays was removed, namely a replication of the work hanging on a wall of a Parisian print shop being seized by government authorities.</p>
                <p className="indent-0"><b>See also:</b> Honoré Daumier, '<i>You were hungry... that is not a reason...</i>', 1845</p>
                <hr className="shortruler" />                
                <PaintingFigure artist="courbet" />
                <p>Being driven by carriage along a rural trail in France, Courbet looked to his side witness an unshocking yet unfamiliar sight: two workers, one elderly and one quite young, breaking stone on the side of the road. This sight, although Courbet seemed to dismiss it as such, was the inspiration for their depictions in this work. Courbet immediately stopped the carriage upon their sight, met with the two workers, and scheduled a meeting at his studio to complete this 1.5 x 2.6m work, according to a letter Courbet wrote to French historian Francis Wey in 1849. In the same letter, he wrote, “One rarely encounters the most complete expression of poverty, [...].” Courbet didn’t see these two workers as pawns for his personal gain, though. In fact, he indicated quite clearly that he understood the separation between the bourgeoisie and the proletariat, and expressed great sympathy for these workers. Upon its exhibition at the Salon of 1850, it received much praise from France’s working class. Perhaps most succinctly, as anarchist ("libertarian-socialist") philosopher Pierre-Joseph Proudhon described, Courbet’s The Stone Breakers was “an icon of the peasant world” and “a visual condemnation of capitalism and potential for greed.”</p>
                <hr className="shortruler" />
                <PaintingFigure artist="repin" />
                <p>In identical fashion to Courbet’s <i>The Stone Breakers</i>, Repin’s <i>Barge Haulers on the Volga</i> depicts a similar dirtiness and exhaustion among laborers. While holidaying on the Volga River in 1870, Repin came across many beautiful landscapes and views of the Volga waters. Included among these sights along the shore of the Volga were the barge haulers, or burlaki, with very darkened faces expressing defeatedness and fatigue, donning dirtied peasantry outfits. Many depicted here are no exception: straps around their torsos, bodies slanted forwards, drab torn clothing, and oily faces are characterized by these burlaki. However, in the middle of all of the figures, heroically stands a young and vibrant boy, fighting against his tense leather strap. None of these figures, not even the heroic boy, are fictional; every character depicted in Repin’s signature work are real encounters. Interestingly, these are not the first men which Repin asked for poses. Many of the men which Repin asked poses from refused out of a folklore concern that their souls would leave their possession once their images were placed on paper. Regardless, Repin’s eleven figures on this 131.5 x 281 cm canvas indicate the very essence of the Russian Empire’s working class, being described as the single greatest painting in social realism thanks to its “unflinching portrayal of the backbreaking labor of these late 19th century human pack mules.”</p>
                <p className="indent-0"><b>See also:</b> Ilya Repin, '<i>Barge Haulers Crossing a Ford</i>', 1872; Frederick Arthur Bridgman, <i>Towing on the Nile</i>, 1875</p>
                <hr className="shortruler" />
                <PaintingFigure artist="millet" />
                <p>In the middle of a dimly-lit field, solemnly and calmly, a woman stands with her black prairie hound and long flock of grass-grazing sheep behind her. Looking out toward the horizon, the vague outline of trees, barrels of hay, and hillsides give the landscape an empty but peaceful feeling. Millet always expressed some level of desire to paint this idea, as his friend Alfred Sensier testifies. This obsession resulted in this landscape where the shepherdess stands in a very vast field knitting the wool in her hands as her herding dog acts as a symmetrical counterweight to the mass of sheep. This shepherdess is clearly more modest and the worker of the sheep behind her, given her modest clothing representative of the peasant class in French society. The painting was ultimately exhibited at the Paris Salon in 1864 where it received great praise, especially by those of the middle-class who preferred the depiction of rural and leisure life in an idealized lens, as opposed to the depiction of hard labor conducted by the lower agricultural class. As Millet wrote: “The gay side of life never shows itself to me… The gayest thing I know is the calm, the silence, which is so sweet, either in the forest or in the cultivated land.”</p>
                <hr className="shortruler" />
                <PaintingFigure artist="breton" />
                <p>With sickle in hand, dirty working clothes on, and feet touching the cold evening ground, this peasant lady stands alone in her field. The sickle, as is commonly known, is a symbol of labor and socialist philosophy, especially during this volatile century in French history. As the title may suggest, her glazy stare, enlightened expression, and full attention is paid to the birdsong she is hearing in the distance. The sunset in the horizon certainly enhances the solemn feeling which viewers may experience. Breton himself, who was raised in the rural town of Courrières in northern France, was often amazed by its inhabitants and those of similar stature. This amazement was rooted in the field workers’ resourcefulness and ability to solve problems, their connection to nature which is especially emphasized here, and general isolated countryside life. Much like Millet’s <i>Shepherdess</i>, the representation of peasantry and the working class earned this 110.6 x 85.8 cm painting critical acclaim at its presentation at the Paris Salon of 1885.</p>
            </div>
        </>
    )
}