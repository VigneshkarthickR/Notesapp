import React from "react";
import Header from "./Header";
import { Provider } from "./Provider/Provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import Pdf from "./Pdf";
import Api from "./Api";

export default function App() {
    console.log(Provider, Profile, NotFound);
    return (

        <>      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/provider" element={<Provider />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pdf" element={<Pdf />} />
                <Route path="/api" element={<Api />} />


            </Routes>
        </BrowserRouter>
        </>)
}