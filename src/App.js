import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import DocumentationPage from "./pages/DocumentationPage";
import CinemaPage from "./pages/CinemaPage";
import MainPage from "./pages/MainPage";
import LikedFilmsPage from "./pages/LikedFilmsPage";
import LikedFilmPage from "./pages/LikedFilmPage";
import TopPage from "./pages/TopPage";


const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<DocumentationPage />} />
        <Route path="/top" element={<MainPage />} />
        <Route path="/cinemas" element={<MainPage />} />
        <Route path="/wishlists" element={<MainPage />} />
        <Route path="/wishlists/:bID" element={<MainPage />} />
        <Route path="/api/:aID" element={<MainPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;