import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import DocumentationPage from "./pages/DocumentationPage";
import CinemaPage from "./pages/CinemaPage";
import MainPage from "./pages/MainPage";
import LikedFilmsPage from "./pages/LikedFilmsPage";
import TopPage from "./pages/TopPage";
import MoviePage from "./pages/MoviePage";
import ActorsPage from "./pages/ActorsPage";
import ActorPage from "./pages/ActorPage";


const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/cinemas" element={<CinemaPage />} />
        <Route path="/wishlists" element={<LikedFilmsPage />} />
        <Route path="/wishlists/:create" element={<LikedFilmsPage />} />
        <Route path="/api" element={<DocumentationPage />} />
        <Route path="/movie/:aID" element={<MoviePage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/actor/:cID" element={<ActorPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;