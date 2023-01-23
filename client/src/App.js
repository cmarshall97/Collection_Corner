import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddCollectibles from './components/AddCollectibles';
import AllCollectibles from './components/AllCollectibles';
import ViewCollectible from './components/ViewCollectible';
import EditCollectible from './components/EditCollectible';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/addnewcollectible' element= {<AddCollectibles/>}/>
          <Route path='/allcollectibles' element= {<AllCollectibles/>}/>
          <Route path='/collectible/:id' element= {<ViewCollectible/>}/>
          <Route path='/:id/delete' element= {<ViewCollectible/>}/>
          <Route path='/edit/collectible/:id' element= {<EditCollectible/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
