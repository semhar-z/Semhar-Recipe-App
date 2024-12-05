import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import RecipeDetail from './Pages/RecipeDetail';
import Search from './Pages/Search';
import Navbar from './Components/Navbar';
import './assets/styles/App.css';
function App() {
 return (
  <Router>
   <Navbar />
   <Routes>
    {/* <Route path="/" exact component={Home} />
    <Route path="/recipe/:id" component={RecipeDetail} />
    <Route path="/search" component={Search} /> */}
     <Route exact path="/" element={<Home />} />
    <Route exact path="/recipe/:id" element={<RecipeDetail />} />
    <Route exact path="/search" element={<Search />} />

   </Routes>
  </Router>
 );
}
export default App;