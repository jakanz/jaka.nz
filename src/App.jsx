import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Header() {
    return (
        <>
            <h1 className="header">
                <div>
                    <img src="/media/pics/sona.png" style={{height:"43px", marginRight:"8px", verticalAlign:"bottom"}} alt="The jakanz persona" />
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
            </h1>
            <hr style={{margin: "0 auto 8px"}} />
        </>
    )
}
function Footer() {
    return (
        <>
            <div style={{textAlign:"center"}}>
                <hr />
                <p style={{margin: "20px auto"}}>Website developed in ReactJS, no rights reserved. <a href="https://github.com/jakanz/jakanz.github.io">Check out the open-source code</a></p>
            </div>
        </>
    )
}

function Home() {
    return (
        <>
            <link href="/css/index.css" rel="stylesheet" type="text/css" />
            <Header />
            <p>You're likely unfamiliar with who I am or what I do, but I'll do my best to explain who I am and my hobbies throughout this reading. I'll try not to talk too extensively about what is likely uninteresting.<br /></p>
            <p>I'm <b>jakanz</b> <span className="inline-note">(she/her)</span>, an internet microcelebrity only capable of basic tasks. If you're a hardcore Primus or System of a Down fan, you may have been familiar with some concert footage archives I put on my YouTube channel before it was suspended.</p>
            <p>If it isn't obvious enough already, I have a big relationship with internet archivism. I tend to archive old tapes of events like concerts or major tragedies, which includes 9/11. I've made my fair share of relatively important archives of this event, especially of those hard to find anywhere else. I'll most likely put these on archive.org from now on.</p>
            <p>Outside of internet archivism, I also enjoy speedrunning random games and achieve as many world records as possible. I can't embed them here, but you can view my times (recordings unfortunately gone due to the death of my YouTube channel) on my <a href="https://speedrun.com/user/jakanz">speedrun.com profile</a>.</p>
            <p>Speaking of gaming, I also enjoy casually playing Counter-Strike 2 and Minecraft, although I sometimes play other games like Tower Unite and Grand Theft Auto 5. However, when I'm not doing any of the above hobbies like gaming or archiving, I'm usually working on coding projects, such as the website you're on right now.</p>
            <p>If you're interested in my other projects, visit my <a href="https://github.com/jakanz">GitHub page</a> or check out these neat projects:</p>
            <div className="projectlist container">
                <p>
                    <a href="https://github.com/jakanz/jakabot"><b>jakabot</b></a>, a discord bot that just does random shit <span className="inline-note">(still in early alpha development, don't expect this to be finished soon)</span><br />
                    <a href="https://github.com/jakanz/roblox-jumper"><b>roblox-jumper</b></a>, an AutoHotkey script to prevent idle kicks on Roblox <span className="inline-note">(no idea if this is ok to use though)</span><br />
                    <a href="https://github.com/jakanz/exponentiation-calc"><b>exponentiation-calc</b></a>, a calculator designed to find all exponents of a base number<br />
                    <a href="https://github.com/jakanz/Blinmaker-3000"><b>Blinmaker-3000</b></a>, a "<a href="https://youtube.com/@LifeOfBoris">Life of Boris</a>" inspired calculator recreated in C# <span className="inline-note">(view original <a href="https://youtube.com/watch?v=FMIZEfjYmtM">here</a>)</span>
                </p>
            </div>
            <p style={{marginBottom: "10px", textAlign: "center"}}>For other projects, like my essays or web projects, check out the directory. <b>Thanks for visiting!</b></p>
            <div style={{textAlign: "center"}}>
                <a href="https://cyber.dabamos.de/88x31"><img src="https://cyber.dabamos.de/88x31/88by31.gif" alt="Find more badges like these!" /></a>
                <a href="https://youtu.be/4nvjGocdugw"><img src="https://cyber.dabamos.de/88x31/acab.gif" alt="Hakim my beloved" /></a>
                <a><img src="https://cyber.dabamos.de/88x31/another.gif" alt="Get me out of here ..." /></a>
                <a><img src="https://cyber.dabamos.de/88x31/antifa.gif" alt="Down with fascism" /></a>
                <a><img src="https://cyber.dabamos.de/88x31/animegay.gif" alt="I... like girls..." /></a>
                <a><img src="https://cyber.dabamos.de/88x31/antinazi.gif" alt="Down with Nazism; long live the immortal science of Marxism" /></a>
                <a href="https://archlinux.org"><img src="https://maia.crimew.gay/badges/archlinux.gif" alt="i use arch btw" /></a>
                <a href="https://www.marxists.org"><img src="https://cyber.dabamos.de/88x31/crushit.gif" alt="Read theory!" /></a>
                <a><img src="https://cyber.dabamos.de/88x31/fckgoogle.gif" alt="FUCK Google" /></a>
                <a><img src="https://cyber.dabamos.de/88x31/graphicdesign.gif" alt="Graphic design is my passion" /></a>
                <a href="https://maia.crimew.gay"><img src="https://toxxy.neocities.org/badge/maiacrimewgay.png" alt=" Maia is a cool person" /></a>
                <a href="https://archive.org/details/@jakanz"><img src="https://cyber.dabamos.de/88x31/preserve.gif" alt="Preserve the web!" /></a>
                <a href="https://reddit.com/u/jakanz"><img src="https://cyber.dabamos.de/88x31/reddit.gif" alt="Check out my Reddit page" /></a>
                <a href="https://toxxy.neocities.org"><img src="https://toxxy.neocities.org/badge/toxxybutton.gif" alt="Toxxy is another cool person, and personal friend of mine" /></a>
                <a href="/srs/transgenocide"><img src="https://cyber.dabamos.de/88x31/transnow2.gif" alt="Transgender people are experiencing a genocide; no way around it" /></a>
                <a href="https://en.wikipedia.org/wiki/User:Jakanz"><img src="https://cyber.dabamos.de/88x31/wikipedia2.gif" alt="Check out my Wikipedia page" /></a>
            </div>
            <Footer />
        </>
    )
}
function Contact() {
    return (
        <>
            <Header />
            <h1 style={{margin: "12px auto auto auto", textDecoration: "underline"}}>Contacts ...</h1>
            <ul style={{margin: "4px auto 16px", fontSize: "1.2em"}}>
                <li>Nothing to be seen here... yet!</li>
            </ul>
            <Footer />
        </>
    )
}
function Directory() {
    return (
        <>
            <link href="/css/directory.css" rel="stylesheet" type="text/css" />
            <Header />
            <h1 className="dirheader">Directory ...</h1>
            <ul>
                <li><a href="/goofs">Goofy web projects</a></li>
                <li><a href="/srs">Serious essays</a></li>
                <li><a href="/contact">Contact me</a></li>
            </ul>
            <Footer />
        </>
    )
}

function Goofs() {
    return (
        <>
            <link href="/css/directory.css" rel="stylesheet" type="text/css" />
            <Header />
            <h1 className="dirheader">Goofy web projects ...</h1>
            <ul>
                <li><a href="/goofs/leekspin">Leekspin</a> <span className="inline-note">(recreation of classic website)</span></li>
                <li><a href="/goofs/trucksex">TRUCK SEX</a> <span className="inline-note">(<a href="https://www.youtube.com/watch?v=WchseC9aKTU">reference</a> -- see the classic Eddie Murphy truck photo in today's era!)</span></li>
            </ul>
            <Footer />
        </>
    )
}
function Leekspin() {
    return (
        <>
            <title>leekspin</title>
            <link href="/media/goofs/leekspin/leek.png" rel="icon" type="image/icon type" />
            <Header />
            <div style={{textAlign: "center", padding: "20px"}}>
                <img src="/media/goofs/leekspin/leekspin.gif" />
                <p style={{marginBottom: "0"}}>You have witnessed <b id="spins">0</b> spins!</p>
            </div>
            <script async src="/media/goofs/leekspin/counter.js" />
            <Footer />
        </>
    )
}
function Trucksex() {
    return (
        <>
            <title>The iconic location of the Two Trucks image</title>
            <link href="/media/goofs/trucksex/truckicon.png" rel="icon" type="image/icon type" />
            <Header />
            <div className="main" style={{textAlign: "center", padding: "20px"}}>
                <div>
                    <img src="/media/goofs/trucksex/trucksex.png" style={{position: "absolute", width: "600px"}} id="trucksex" />
                    <img src="/media/goofs/trucksex/todaysex.png" style={{width: "600px"}} />
                </div>
                <input id="slider" type="range" min="0" max="250" defaultValue="0" style={{width: "600px", margin: "4px 0 0 0"}} />
                <p style={{marginBottom: "0"}}><a href="https://goo.gl/maps/DcxJxZMKog1QEhzt5">See the original Google Maps view</a></p>
            </div>
            <script async src="/media/goofs/trucksex/trucksex.js" />
            <Footer />
        </>
    )
}

function Srs() {
    return (
        <>
            <link href="/css/directory.css" rel="stylesheet" type="text/css" />
            <Header />
            <h1 className="dirheader">Serious essays ...</h1>
            <ul>
                <li><a href="/srs/netchoice">Moody v. NetChoice (2024) is the fault of DeSantis and conservative moral panics</a></li>
                <li><a href="/srs/transgenocide">The steps of a genocide, and how it applies to transgender people in the United States</a></li>
            </ul>
            <Footer />
        </>
    )
}
function Netchoice() {
    return (
        <>
            <link href="/css/srs.css" rel="stylesheet" type="text/css" />
            <Header />
            <h1 className="essayname">Moody v. NetChoice is the fault of DeSantis and conservative moral panics</h1>
            <hr className="hardborder" />
            <h2>Background information</h2>
            <p>A particular Supreme Court case that was recently argued, Moody v. NetChoice, has been making the rounds in a few news outlets. In May 2021, Florida governor Ron DeSantis signed Florida Senate Bill 7072 that prohibited social-media platforms from imposing specific restrictions or punishments on accounts of candidates for political office or otherwise a politically open citizen.<sup><a href="https://www.flgov.com/2021/05/24/governor-ron-desantis-signs-bill-to-stop-the-censorship-of-floridians-by-big-tech/">[src]</a></sup> DeSantis cited that he is guaranteeing Floridians "protection against the Silicon Valley elites," with Lieutenant Governor Jeanette Nuñez saying that Big Tech will "contrive, manipulate, and censor [you] if you voice views that run contrary to their radical leftist narrative." NetChoice, an industry association that represents internet companies like Google and Twitter, stated that the bill violated social-media companies' First Amendment right to free speech.<sup><a href="https://www.oyez.org/cases/2023/22-277">[src]</a></sup> This bill would legally allow Florida residents to sue Big Tech companies that violate the law and win monetarily. The law also allows the Florida Elections Commission to fine social-media companies $250,000 per day for restricting state candidates and $25,000 per day for restricting local candidates.<sup><a href="https://www.techpolicy.press/tracker/florida-social-media-platforms-bill-sb-7072/">[src]</a></sup> The Eleventh Circuit ruled against this law in May 2022, though the law is now in the high court.<sup><a href="https://www.eff.org/deeplinks/2022/05/11th-circuits-ruling-uphold-injunction-against-floridas-social-media-law-win-amid">[src]</a></sup></p>
            <hr className="shortline" />
            <h2>Interpretation and opinion</h2>
            <p style={{marginBottom: "16px"}}>This law is ridiculous. For one, citing that voicing right-wing opinions or dissents are being censored because of inherent bias from large social-media companies is disingenous. The only reason companies would remove content from right-wing politicians or users is because the content violated their Terms of Service or community guidelines. With the increase in anti-LGBT rhetoric and <strong><a href="/srs/transgenocide">the moral panic surrounding trans rights</a></strong>, it is no shock that Ron DeSantis, hoping to push his political agenda consisting of pure transphobia, is framing rightfully deleted content as censorship of conservative voices, when the reality is those conservative voices will intentionally harm and misgender their political opponents because they feel oppressed by a minority, a violation of community guidelines on virtually every online platform. Need I remind DeSantis that social-media companies are not government enterprises and thus are not guaranteed free speech absolutism, a stance on freedom of speech that has had historically bad results?<sup><a href="https://klementoninvesting.substack.com/p/free-speech-absolutism-is-dangerous">[src]</a></sup> Need I also remind him that the freedom of speech is not the freedom of consequence?<sup><a href="https://www.nytimes.com/roomfordebate/2015/01/10/when-satire-cuts-both-ways/freedom-of-speech-not-freedom-from-consequences">[src]</a></sup> Need I also remind him that the protection of free speech means you should have the right to speak your mind but does not mean people need to hear you? Plus, those big bucks from violations of this law would certainly not go into the state budget to improve critical infrastructure or anything that actually matters; it's most likely to end into the hands of Ron DeSantis for his next failure of a presidential campaign.</p>
            <Footer />
        </>
    )
}
function Transgenocide() {
    return (
        <>
            <title>trans rights</title>
            <link href="/media/pics/heart.png" rel="icon" type="image/png" />
            <link href="/css/srs.css" rel="stylesheet" type="text/css" />
            <Header />
            <h1 className="essayname">The ten steps of a genocide, and how it applies to <span class="transrights">transgender people</span> in the United States</h1>
            <hr className="hardborder" />
            <ul>
                <li><h2>Classification <span className="note"> / <a href="https://www.youtube.com/watch?v=HoLhKJuGhK0">"Us vs Them"</a> dynamic established - stereotypes become popular</span></h2></li>
                Online chat groups and hubs like Twitter or Facebook tend to do this a lot. By launching stereotypes, you can reduce the idea of a group's existence to only stereotypical actions. This includes people who believe all transgender people cut off their penises (despite 60% of total trans people never experiencing genital dysphoria and the existence of transgender men).
                <hr className="shortline" />
                <li><h2>Symbolisation <span className="note"> / Visual manifestations of hatred and bigotry</span></h2></li>
                This may involve hatred of a group of people identified by a notable idea within this group's belief system. For transgender people, the transgender flag is often enough to <abbr title="LMAAAOOOO IMAGINE GETTING MAD OVER FIVE COLORED STRIPES AND THREE UNIQUE COLORS&#013;WHAT A BUNCH OF SNOWFLAKES AMIRITE HAHAHA LOOLLLL">trigger</abbr> transphobes.
                <hr className="shortline" />
                <li><h2>Discrimination <span className="note"> / Dominant groups deny civil rights or even citizenship to a group</span></h2></li>
                Discrimination does not have to be experienced on such a major scale. Anyone can feel discriminated on the basis of their life. For trans people in the UK, <a href="https://www.totaljobs.com/advice/wp-content/uploads/Transgender-employee-experiences-survey-report-2016_Totaljobs.pdf">38% of 432 TotalJobs survey respondents claimed they felt discriminated against by work colleagues.</a>
                <hr className="shortline" />
                <li><h2>Dehumanisation <span className="note"> / Those perceived as different are treated with no personal dignity</span></h2></li>
                Referring to a transgender person as "a trans" or slurs removes all personality and reduces their existence to a trait. Being trans is now an insult or a joke. This is seen almost everyday by transphobes who constantly deny the existence or the personal afflictions of a transgender person, and remove them from all humane context to advance their pathetic culture war.
                <hr className="shortline" />
                <li><h2>Organisation <span className="note"> / Bigoted regimes train those who carry out the destruction of a people</span></h2></li>
                You can see this applied to transgender people through the formation of multiple transphobic groups such as the Proud Boys or "LGB without the T." I recommend viewing a full list of <a href="https://en.wikipedia.org/wiki/List_of_organizations_designated_by_the_Southern_Poverty_Law_Center_as_anti-LGBT_hate_groups">groups designated as anti-LGBT by the Southern Poverty Law Centre.</a>
                <hr className="shortline" />
                <li><h2>Polarisation <span className="note"> / Hate groups begin spreading propaganda to radicalize their believers</span></h2></li>
                This is often seen through what media publications do NOT say. While news organizations will not explicitly state their ill intentions or beliefs directly, they will communicate this by censoring or redacting information altogether to avoid playing the notes they shouldn't. One example of how this relates to transgender people is often seen in British media by publications like the BBC or The Guardian. Publishing articles with heavy anti-trans bias is becoming increasingly common in the UK.
                <hr className="shortline" />
                <li><h2>Preparation <span className="note"> / A fear of the victim group is formed - euphemisms cloak malice</span></h2></li>
                <a href="https://translegislation.com">Anti-trans legislation</a> such as Idaho's <a href="https://legislature.idaho.gov/sessioninfo/2023/legislation/h0071/">"Vulnerable Child Protection Act"</a> or New Mexico's failed <a href="https://www.nmlegis.gov/Legislation/Legislation?chamber=H&legtype=B&legno=492&year=23">"Women's Sports Protection Act"</a> hides the malice and bigotry against transgender people behind an innocent sounding name to prevent a logically sound portion of the public or critical thinkers to determine the use of legislation like these examples.
                <hr className="shortline" />
                <li><h2>Persecution <span className="note"> / Victims are identified by symbolisation and death lists are drawn up, massacres begin - segregation, deportation, starvation, or even expropriated property</span></h2></li>
                Trans people have been murdered for their identity in the past, and often it is dismissed as a one-off deal. However, with increased discrimination and inaction to prevent it, massacres will become more common. Trans people like Brianna Ghey, Caelee Love-Light, and Daniel Aston (killed in the <a href="https://en.wikipedia.org/wiki/Colorado_Springs_nightclub_shooting">Club Q massacre</a>) are unfortunately examples, as this is notable to the functioning members of society; although, for homophobes like <a href="https://www.independent.co.uk/news/world/americas/crime/anderson-lee-aldrich-colorado-springs-shooting-b2348450.html">Anderson Aldrich</a>, they <i>choose</i> to keep their eyes shut.
                <hr className="shortline" />
                <li><h2>Extermination <span className="note"> / Hate groups murder identified victims in a deliberate and systematic campaign of violence - possibly hundreds of thousands of lives will be heavily damaged</span></h2></li>
                Since transgender people are part of a larger LGBTQ community, transphobic murders and massacres are extremely likely to extrapolate to gay folk. Due to the fact transgender people are a smaller group than the Jews were before and during Nazi reign, many will look upon this genocide with a blind eye and feel they are seeing nothing because it isn't on such a large scale - yet.
                <hr className="shortline" />
                <li><h2>Denial <span className="note"> / The perpetrators or later generations deny the existence of any crime</span></h2></li>
                Transphobes have already been claiming there is no active genocide against trans people, for irrelevant or mundane reasons such as "genocide is defined as the killing of an entire group" or "only (##) transgender people were murdered last year!" This largely misled ideology stems from far-right media propaganda and bigoted indoctrination. The denial of the ongoing genocide against transgender people in the United States is a denial of history; there is no other excuse.
            </ul>
            <hr class="hardborder" />
            <p style={{margin: "0px 8px", textAlign: "justify"}}><strong>It should be known that it is debatable what stage transgender people in the United States are currently facing; most generally say anywhere between six (6) and eight (8).</strong> However, this shouldn't be an argument at all. The obsession with refusing bodily autonomy are perfectly reflected by the sociopolitical climate as it stands, whereas the evolution of America's economy to fascism is seeing entire demographics isolated and ostracized, just as any other fascist nation has done. There is no reason to have trans people ceaselessly interrogated or, even worse, killed everyday for their identities. It is times like these where the wise words of comedian/realist George Carlin become relevant: <a href="https://www.youtube.com/watch?v=Zg9bf2WxTcA">the Nazis lost World War II, but fascism won it.</a></p>
            <p style={{textAlign: "center",  margin: "6px auto", fontSize: "1.6em"}}><b>jakanz says <span class="transrights">trans rights</span> 🏳️‍⚧️❤️</b></p>
            <Footer />
        </>
    )
}

function NotFound() {
    return (
        <>
            <title>404</title>
            <Header />
            <h1 style={{ color: "#FCD3BB", margin: 0, textAlign: "center", fontSize: "4em" }}>404</h1>
            <p style={{ textAlign: "center", marginBottom: "12px" }}>
                That URL doesn't look quite right. You can get back to navigating the site with the directory, linked in the header above. Thank you for visiting this 404 page anyways. 💝
            </p>
            <Footer />
        </>
    )
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/goofs" element={<Goofs />} />
                <Route path="/goofs/leekspin" element={<Leekspin />} />
                <Route path="/goofs/trucksex" element={<Trucksex />} />
                <Route path="/srs" element={<Srs />} />
                <Route path="/srs/netchoice" element={<Netchoice />} />
                <Route path="/srs/transgenocide" element={<Transgenocide />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
