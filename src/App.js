import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Client from './pages/Client';



function App() {
  return (
   <main>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Client' element={<Client/>}/>
      </Routes>
      </BrowserRouter>
   </main>
  
  );
}

export default App;
