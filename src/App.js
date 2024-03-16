import React, { useState } from 'react';
import { BrowserRouter, Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CsAdmin from './CsAdmin';
import IsAdmin from './IsAdmin';
import SuperAdmin from './SuperAdmin';
import ACS_Faculty from './ACS_Faculty';
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
            path="/CSadmin"
            element={<PrivateRoute element={<CsAdmin />} allowedRoles={userRole} />}
          />
          <Route
            path="/ISadmin"
            element={<PrivateRoute element={<IsAdmin />} allowedRoles={userRole} />}
          />
           {/* <Route
            path="/ACSfaculty"
            element={<PrivateRoute element={<ACS_Faculty />} allowedRoles={userRole} />}
          /> 
            <Route
              path="/csadmin/viewfaculty"
              element={<PrivateRoute element={<ACS_Faculty />} />}
            />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
