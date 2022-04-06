import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Users from './components/Users';
import Userprofile from './components/Userprofile';


function App() {
  return (
<Router>
  <nav>

  </nav>
  <Routes>
    <Route path="/" element={<Users />} />
    <Route path="/:login" element={<Userprofile />} />
  </Routes>
</Router>
  );
}

export default App;
