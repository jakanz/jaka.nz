import Home from "./jsx/Home";
import Contact from "./jsx/Contact";
import Directory from "./jsx/Directory";

import HomeGoofs from "./jsx/goofs/HomeGoofs";
import Leekspin from "./jsx/goofs/Leekspin";
import Trucksex from "./jsx/goofs/Trucksex";

import HomeSrs from "./jsx/srs/HomeSrs";
import Netchoice from "./jsx/srs/Netchoice";
import Transgenocide from "./jsx/srs/Transgenocide";

import NotFound from "./jsx/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./jsx/PageWrapper";
export default function App() {
    return (
        <Router>
            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/directory" element={<Directory />} />
                    <Route path="/goofs" element={<HomeGoofs />} />
                    <Route path="/goofs/leekspin" element={<Leekspin />} />
                    <Route path="/goofs/trucksex" element={<Trucksex />} />
                    <Route path="/srs" element={<HomeSrs />} />
                    <Route path="/srs/netchoice" element={<Netchoice />} />
                    <Route path="/srs/transgenocide" element={<Transgenocide />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PageWrapper>
        </Router>
    )
}
