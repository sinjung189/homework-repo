import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContentListPage from "./List/ContentListPage";
import PostPage from "./List/PostPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ContentListPage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  );
}
