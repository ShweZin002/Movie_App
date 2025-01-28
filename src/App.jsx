import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/Movie_App" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/movies/detail/:movieId" element={<Details/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
