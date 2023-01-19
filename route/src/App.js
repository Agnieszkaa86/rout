import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/about";
import AboutMission from "./pages/about/Mission";
import AboutReviews from "./pages/about/Reviews";
import AboutTeam from "./pages/about/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from './pages/blog';
import BlogPost from "./pages/blog/post"
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
        <Route path="mission" element={<AboutMission />} />
        <Route path="team" element={<AboutTeam />} />
        <Route path="reviews" element={<AboutReviews />} />
        </Route>
        <Route path="blog" element={<Blog />} />
         <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
