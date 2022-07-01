import Navbar from './components/MainNavbar';

import Women from './pages/Women';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* <div className='container'> */}
        <Navbar />
        <Routes>
          <Route exact path='/women' element={<Women />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
