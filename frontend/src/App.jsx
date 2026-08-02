import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/admin"
        element={
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
