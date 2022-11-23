import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Menu } from 'components/Menu';
import { DefaultPage } from 'components/DefaultPage';
import { Home } from "pages/Home";
import { AboutMe } from "pages/AboutMe";
import { Post } from 'pages/Post';
import { Footer } from 'components/Footer';
import { Page404 } from "pages/Page404";

export function RoutesApp() {
  return (
    <BrowserRouter>
        <Menu />

        <Routes>
            <Route path="/" element={<DefaultPage />} >
                <Route index element={<Home />} />
                <Route path="sobremim" element={<AboutMe />} />
            </Route>
            <Route path="posts/:id" element={<Post />} />

            <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}
