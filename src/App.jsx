import { useEffect, useMemo, useState } from 'react'
import './App.css'
import'./test.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { auth, db } from './Firebase/Firebase';
import { fetchSignInMethodsForEmail , onAuthStateChanged , updateProfile} from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import MainDash from './Dashboard/MainDash';
import Produit from './Dashboard/Produit';
import Stock from './Dashboard/Stock';

function App() {
  const [user, setuser] = useState({})
  useMemo(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
    })
}, [user])
useEffect(() => {
  if(user?.uid){
  const createUser = async () => {
  const res =  await getDoc(doc(db, "user" , user?.uid))
  try {
    if(!res.exists() ){
      await setDoc(doc(db, "user", user?.uid), {
        uid : user?.uid,
        displayName : 'user-' + user?.uid?.slice(0, 10),
        email: user?.email,
        photoURL : user?.photoURL,
        userColor: '#'+Math.floor(Math.random()*16777215).toString(16),
         });
    }else{
      console.log('exists!');
    }
  } catch (error) {
    console.log(error);
  }
  }
  user?.uid && createUser()
}
}, [user])

const router = createBrowserRouter(
  createRoutesFromElements(
       <Route path='/' element={<Root  />}>
            <Route path='/' element={user?.email ?  <Dashboard />: <Home />} >
              {user?.email  && (
                <>
                <Route path='/' element={<MainDash />}/>
                <Route path='/produit' element={<Produit />}/>
                <Route path='/stock' element={<Stock />}/>
                </>
              )}
            </Route>

       </Route>
  )
)
  return (
        <RouterProvider router={router} />
  )
}
const Root = () => {

  return(
      <>
       <Outlet />
      </>
  )
}
export default App
