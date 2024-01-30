import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import Admin from './Admin';
import SuperAdmin from './SuperAdmin';
import Faculty from './Faculty';
import ErrorPage from './ErrorPage';


function App() {
  const [userRole, setUserRole] = useState(null);


  const handleUserRoleChange = ({ newUserRole }) => {
    setUserRole(newUserRole);
  };

  const PrivateRoute = ({ element }) => {
    // Check if the user is authenticated
    const isAuthenticated = userRole !== null;

    if (!isAuthenticated) {
      // User not authenticated, redirect to login or handle accordingly
      return <Navigate to="/404Error" />;
    }
    // return React.cloneElement(element, { handleSignOut }); // Pass handleSignOut to the child component
    return element;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/404Error" element={<ErrorPage />} />
          <Route exact path="/login" element={<LoginScreen onUserRoleChange={handleUserRoleChange} />} />
          {/* <Route exact path="/login" element={<LoginScreen onUserRoleChange={handleUserRoleChange}/>} /> */}
          <Route
            path="/superAdmin"
            element={<PrivateRoute element={<SuperAdmin />} allowedRoles={userRole} />}
          />
          <Route
            path="/admin"
            element={<PrivateRoute element={<Admin />} allowedRoles={userRole} />}
          />
          <Route
            path="/faculty"
            element={<PrivateRoute element={<Faculty />} allowedRoles={userRole} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
