import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Home } from "pages/Home";
import { AboutMe } from "pages/AboutMe";
import { Page404 } from "pages/Page404";
import { Menu } from 'components/Menu';

export function RoutesApp() {
  return (
    <BrowserRouter>
        <Menu />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobremim" element={<AboutMe />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}
