import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <video autoPlay muted loop id='bg-video' >
      <source src='' type='video/mp4'/>
      </video>
      <header className="App-header bg-info">
        <h1 className='display-3 text-center p-3 fw-bold text-warning'>BuildTech Hub</h1>
      </header>
      <NavBar/>
      <Routes>
        {/* map a single route */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproduct' element={<AddProducts/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/mpesapayment' element={<MpesaPayment/>}/>
       
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
