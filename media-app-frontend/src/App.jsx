
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './Pages/Landingpage';
import Homepage from './Pages/Homepage';
import Pagenot from './Pages/Pagenot';
import History from './Pages/History'
import Layout from './Components/Layout';




function App() {
  return (
    <div className="App">
      {/* localhost 300 landing page */}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        {/* Wrapped in Layout from here */}
        <Route path='/home' element={<Layout><Homepage /></Layout>} />
        <Route path='/watch-history' element={<Layout><History /></Layout>} />
        {/* path for page not found */}
        <Route path='*' element={<Layout><Pagenot /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
