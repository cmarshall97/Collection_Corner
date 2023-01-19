import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddAndSeeCollectibles from './components/AddAndSeeCollectibles';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element= {<Main/>}/> */}
          <Route path='/mycollections' element= {<AddAndSeeCollectibles/>}/>
          <Route path='/pets/:id' element= {<AllCollectibles/>}/>
          {/* <Route path='/pets/:id' element= {<OnePet/>}/> */}
          {/* <Route path='//pets/:id/edit' element= {<EditOnePet/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
