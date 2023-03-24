import './App.css';
import LandingPage from './Component/LandingPage';
import ProfilePage from './Component/ProfilePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Post from './Pages/Post';
import Gallery from './Pages/Gallery';
import Todo from './Pages/Todo';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/profilePage/:id' element={<ProfilePage/>}/>
    <Route path='/Post' element={<Post/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/todo' element={<Todo/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
