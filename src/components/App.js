/*import React from 'react'
import '../styles/App.css';
const App = () => {


  return (
    <div id="main">
    </div>
  )
}


export default App;
*/
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Home from "./pages/Home";
import ProtectedRoute from "./shared/components/ProtectedRoute";

import "./services/firebase/initialize";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase/initialize";
import { logUserIn, logUserOut } from "./redux/slices/authSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAuthChange = (user) => {
      if (user) {
        const logInAction = logUserIn({ email: user.email, userId: user.uid });
        dispatch(logInAction);
        return;
      }

      dispatch(logUserOut());
    };

    const unsubscribe = onAuthStateChanged(auth, handleAuthChange);

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
Footer
