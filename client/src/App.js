import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddAndSeeCollectibles from './components/AddAndSeeCollectibles';
import AllCollectibles from './components/AllCollectibles';
import ViewCollectibleCreator from './components/ViewCollectibleCreator';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          {/* <Route path='/' element= {<Main/>}/> */}
          <Route path='/mycollections' element= {<AddAndSeeCollectibles/>}/>
          <Route path='/allcollectibles' element= {<AllCollectibles/>}/>
          <Route path='/collectible/:id' element= {<ViewCollectibleCreator/>}/>
          <Route path='/:id/delete' element= {<ViewCollectibleCreator/>}/>
          {/* <Route path='//pets/:id/edit' element= {<EditOnePet/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
