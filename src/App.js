import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import ProfilePage from './components/profilepage';
import Quotepage from './components/quotepage';
import Logout from './components/logout';
import ReadMore from './components/readmore';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path='/my_profile' element={<ProfilePage/>}/>
     <Route path='/get_quote' element={<Quotepage/>}/>
     <Route path='/logout' element={<Logout/>}/>
     <Route path='/readmore/:id' element={<ReadMore/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
