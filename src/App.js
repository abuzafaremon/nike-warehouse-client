import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffCanvas from './Components/OffCanvas/OffCanvas';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import AddItem from './Pages/AddItem/AddItem';
import ManageItems from './Pages/ManageItems/ManageItems';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/firebase.init';

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <OffCanvas />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/manageInventory' element={<ManageInventory />}></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
