import './App.css';
import Hero  from "./components/Hero";
import {Routes,Route} from "react-router-dom";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import MovieInfo from "./components/pages/MovieInfo";
import ActorInfo from "./components/pages/ActorInfo";
import SearchResult from "./components/pages/SearchResult";
function App() {
  return (
<>
  <Hero/>
  <Routes>>
  <Route path={"/"} element={<Home/>}/>
    <Route path={"/about"} element={<About/>}/>
    <Route path={"/projects"} element={<Projects/>}/>
    <Route path={"/contacts"} element={<Contact/>}/>

    <Route path={"/movie_info/:movieId"} element={<MovieInfo/>}/>
    <Route path={"/actor_info/:actorId"} element={<ActorInfo/>}/>
    <Route path={"/movie_search/:movie_name"} element={<SearchResult/>}/>


  </Routes>
</>
  );
}

export default App;
