function InfoIcon() {
    return (
        <svg
            className="fill-cyan-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 50 50"
        >
            <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
        </svg>
    );
}

export default function InfoNotice({ children }) {
    return (
        <div className="bg-cyan-800/20 m-3 p-3 pr-4 rounded-lg flex gap-2 items-center">
            <div className="flex-shrink-0">
                <InfoIcon />
            </div>
            <p className="text-cyan-600 m-0 text-justify align-top">
                {children}
            </p>
        </div>
    );
}
