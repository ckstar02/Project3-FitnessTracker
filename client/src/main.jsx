import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import { UserProvider } from "./components/UserContext";
import Error from "./pages/Error";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipeSearch from './pages/recipieSearch';
import PersonalGoals from "./pages/personalGoals";
import { PersonalGoal, User } from "../../server/src/models";
import Calendar from './pages/Calendar';
import DailyGoalPage from "./pages/DailyGoals";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'landingpage',
        element: <LandingPage />
      },
      {
        path: 'error',
        element: <Error />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'personalGoal',
        element: <PersonalGoals />
      },
      {
        path: 'recipesearch',
        element: <RecipeSearch />
      },
      {
        path: 'personalgoals',
        element: <PersonalGoal />
      },
      {
        path: 'dailygoal',
        element: <DailyGoalPage />
      },
      {
        path: 'calendar',
        element: <Calendar />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </UserProvider>

);