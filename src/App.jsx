import PageWrapper from "./jsx/PageWrapper";
import Home from "./jsx/Home";
import Directory from "./jsx/Directory";
import NotFound from "./jsx/NotFound";

import Narrowlanes from "./jsx/essays/Narrowlanes";
import Netchoice from "./jsx/essays/Netchoice";
import Proletariatrealism from "./jsx/essays/Proletariatrealism";
import Rococoandneoclassicism from "./jsx/essays/Rococoandneoclassicism";
import Seventiesphotography from "./jsx/essays/Seventiesphotography";
import Transgenocide from "./jsx/essays/Transgenocide";

import Leekspin from "./jsx/webprojects/Leekspin";
import Trucksex from "./jsx/webprojects/Trucksex";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <Router>
            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dir" element={<Directory />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="/essays/narrowlanes" element={<Narrowlanes />} />
                    <Route path="/essays/netchoice" element={<Netchoice />} />
                    <Route path="/essays/proletariatrealism" element={<Proletariatrealism />} />
                    <Route path="/essays/rococoandneoclassicism" element={<Rococoandneoclassicism />} />
                    <Route path="/essays/seventiesphotography" element={<Seventiesphotography />} />
                    <Route path="/essays/transgenocide" element={<Transgenocide />} />

                    <Route path="/webprojects/leekspin" element={<Leekspin />} />
                    <Route path="/webprojects/trucksex" element={<Trucksex />} />
                </Routes>
            </PageWrapper>
        </Router>
    )
}
