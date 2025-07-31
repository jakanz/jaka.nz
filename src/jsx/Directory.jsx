import { useSearchParams } from "react-router-dom";

const directories = {
    default: {
        title: "Site directory",
        items: [
            { label: "Essay directory", href: "/dir?list=essays" },
            { label: "Web projects", href: "/dir?list=webprojects" },
            { label: "Contact me", href: "/dir?list=contacts" },
        ],
    },
    essays: {
        title: "Essay directory",
        items: [
            { label: "How can narrower lanes prevent pedestrian deaths and make transportation faster?", href: "/essays/narrowlanes", },
            { label: "Moody v. NetChoice (2024) is the fault of DeSantis and conservative moral panics", href: "/essays/netchoice", },
            { label: "Depictions of the proletariat in Realist art: an exhibition", href: "/essays/proletariatrealism", },
            { label: "Comparing Rococo to Neoclassicism: a contrast between Fragonard and Charpentier", href: "/essays/rococoandneoclassicism", },
            { label: "A small selective review of a work inside an exhibition for 1970s photography", href: "/essays/seventiesphotography", },
            { label: "The steps of a genocide, and how it applies to transgender people in the United States", href: "/essays/transgenocide", },
        ],
    },
    webprojects: {
        title: "Web projects",
        items: [
            { label: "Leekspin", href: "/webprojects/leekspin", note: "(recreation of classic website)" },
            { label: "TRUCKSEX", href: "/webprojects/trucksex", note: "(<a href='https://www.youtube.com/watch?v=WchseC9aKTU' target='_blank' rel='noopener noreferrer'>reference</a> -- see the classic Eddie Murphy truck photo in today's era!)" },
        ],
    },
    contacts: {
        title: "Contact me",
        items: [
            { label: "Nothing to be seen here... yet!", href: "" },
        ],
    },
};

export default function Directory() {
    const [searchParams] = useSearchParams();
    const list = searchParams.get("list");
    const data = directories[list] || directories.default;

    return (
        <div className="p-4">
            <h1 className="dirheader">{data.title}</h1>
            <ul className="dirlist">
                {data.items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                        {item.note && (
                            <span className="note" dangerouslySetInnerHTML={{ __html: ` ${item.note}` }}></span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
