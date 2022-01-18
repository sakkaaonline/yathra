import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./component/Layout";
import MainPage from "./container/mainPage";
import Gallery from "./component/Gallery";
import Facebook from "./component/Facebook";
import Contact from "./component/Contact";
import Events from "./component/NewEvent";
import NotFound from "./component/NotFound";

const AppWrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="facebookpage" element={<Facebook />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="events" element={<Events />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppWrapper;