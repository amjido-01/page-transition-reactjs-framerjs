import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { Contact } from "./Contact";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
