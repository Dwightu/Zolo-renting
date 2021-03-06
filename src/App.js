import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import SingIn from './pages/SignIn'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SingIn />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
