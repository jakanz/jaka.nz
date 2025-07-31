function GenocideStep({ title, note, children }) {
    return (
        <li>
            <h2 className="essaysubheader">{title} <span className="note">/ {note}</span></h2>
            <div>{children}</div>
            <hr className="shortruler" />
        </li>
    );
}

const steps = [
    {
        title: <>Classification</>,
        note: <><a href="https://www.youtube.com/watch?v=HoLhKJuGhK0">"Us vs Them"</a> dynamic established - stereotypes become popular</>,
        content: <>Online chat groups and hubs like Twitter or Facebook tend to do this a lot. By launching stereotypes, you can reduce the idea of a group's existence to only stereotypical actions. This includes people who believe all transgender people cut off their penises (despite 60% of trans people never experiencing genital dysphoria in addition to the existence of transgender men).</>
    },
    {
        title: <>Symbolisation</>,
        note: <>Visual manifestations of hatred and bigotry</>,
        content: <>This may involve hatred of a group of people identified by a notable idea within this group's belief system. For transgender people, the transgender flag is often enough to trigger transphobes. (snowflakes...)</>
    },
    {
        title: <>Discrimination</>,
        note: <>The "dominant" groups deny civil rights and even citizenship to a group</>,
        content: <>Discrimination does not have to be experienced on such a major scale. Anyone can feel discriminated on the basis of their life. For trans people in the UK, <a href="https://www.totaljobs.com/advice/wp-content/uploads/Transgender-employee-experiences-survey-report-2016_Totaljobs.pdf">38% of 432 TotalJobs survey respondents claimed they felt discriminated against by work colleagues.</a></>
    },
    {
        title: <>Dehumanisation</>,
        note: <>Those perceived as different are treated with no personal dignity</>,
        content: <>Referring to a transgender person as "a trans" or slurs removes all personality and reduces their existence to a trait. Being trans is now an insult or a joke. This is seen almost everyday by transphobes who constantly deny the existence or the personal afflictions of a transgender person, and remove them from all humane context to advance their pathetic culture war.</>
    },
    {
        title: <>Organisation</>,
        note: <>Bigoted regimes train those who carry out the destruction of a people</>,
        content: <>You can see this applied to transgender people through the formation of multiple transphobic groups such as the Proud Boys or "LGB without the T." I recommend viewing a full list of <a href="https://en.wikipedia.org/wiki/List_of_organizations_designated_by_the_Southern_Poverty_Law_Center_as_anti-LGBT_hate_groups">groups designated as anti-LGBT by the Southern Poverty Law Centre.</a></>
    },
    {
        title: <>Polarisation</>,
        note: <>Hate groups begin spreading propaganda to radicalize their believers</>,
        content: <>This is often seen through what media publications do NOT say. While news organizations will not explicitly state their ill intentions or beliefs directly, they will communicate this by censoring or redacting information altogether to avoid playing the notes they shouldn't. One example of how this relates to transgender people is often seen in British media by publications like the BBC or The Guardian. Publishing articles with heavy anti-trans bias is becoming increasingly common in the UK.</>
    },
    {
        title: <>Preparation</>,
        note: <>A fear of the victim group is formed - euphemisms cloak malice</>,
        content: <><a href="https://translegislation.com">Anti-trans legislation</a> such as Idaho's <a href="https://legislature.idaho.gov/sessioninfo/2023/legislation/h0071/">"Vulnerable Child Protection Act"</a> or New Mexico's failed <a href="https://www.nmlegis.gov/Legislation/Legislation?chamber=H&legtype=B&legno=492&year=23">"Women's Sports Protection Act"</a> hides the malice and bigotry against transgender people behind an innocent sounding name to prevent a logically sound portion of the public or critical thinkers to determine the use of legislation like these examples.</>
    },
    {
        title: <>Persecution</>,
        note: <>Victims are identified by symbolisation and death lists are drawn up, massacres begin - segregation, deportation, starvation, or even expropriated property</>,
        content: <>Trans people have been murdered for their identity in the past, and often it is dismissed as a one-off deal. However, with increased discrimination and inaction to prevent it, massacres will become more common. Trans people like Brianna Ghey, Caelee Love-Light, and Daniel Aston (killed in the <a href="https://en.wikipedia.org/wiki/Colorado_Springs_nightclub_shooting">Club Q massacre</a>) are unfortunately examples, as this is notable to the functioning members of society; although, for homophobes like <a href="https://www.independent.co.uk/news/world/americas/crime/anderson-lee-aldrich-colorado-springs-shooting-b2348450.html">Anderson Aldrich</a>, they <i>choose</i> to keep their eyes shut.</>
    },
    {
        title: <>Extermination</>,
        note: <>Hate groups murder identified victims in a deliberate and systematic campaign of violence - possibly hundreds of thousands of lives will be heavily damaged</>,
        content: <>Since transgender people are part of a larger LGBTQ community, transphobic murders and massacres are extremely likely to extrapolate to gay folk. Due to the fact transgender people are a smaller group than the Jews were before and during Nazi reign, many will look upon this genocide with a blind eye and feel they are seeing nothing because it isn't on such a large scale - yet.</>
    },
    {
        title: <>Denial</>,
        note: <>The perpetrators or later generations deny the existence of any crime</>,
        content: <>Transphobes have already been claiming there is no active genocide against trans people, for irrelevant or mundane reasons such as "genocide is defined as the killing of an entire group" or "only (##) transgender people were murdered last year!" This largely misled ideology stems from far-right media propaganda and bigoted indoctrination. The denial of the ongoing genocide against transgender people in the United States is a denial of history; there is no other excuse.</>
    }
]

export default function Transgenocide() {
    return (
        <>
            <title>trans rights</title>
            <link
                href="/media/pics/heart.png"
                rel="icon"
                type="image/png"
            />
            <h1 className="essaytitle">The ten steps of a genocide, and how it applies to <span className="bg-trans gradient">transgender people</span> in the United States</h1>
            <ul className="list-[upper-roman]">
                {steps.map(({ title, note, content }) => (
                    <GenocideStep title={title} note={note}>{content}</GenocideStep>
                ))}
            </ul>
            <p className="mx-4 text-justify"><b>It should be known that it is debatable what stage transgender people in the United States are currently facing; most generally say anywhere between six (6) and eight (8).</b> However, this shouldn't be an argument at all. The obsession with refusing bodily autonomy are perfectly reflected by the sociopolitical climate as it stands, whereas the evolution of America's economy to fascism is seeing entire demographics isolated and ostracized, just as any other fascist nation has done. There is no reason to have trans people ceaselessly interrogated or, even worse, killed everyday for their identities. It is times like these where the wise words of comedian/realist George Carlin become relevant: <a href="https://www.youtube.com/watch?v=Zg9bf2WxTcA" target="_blank" rel="noopener noreferrer">the Nazis lost World War II, but fascism won it.</a></p>
            <p className="text-center text-[1.6rem] mb-5"><b>jakanz says <span className="bg-trans gradient">trans rights</span> 🏳️‍⚧️❤️</b></p>
        </>
    )
}
