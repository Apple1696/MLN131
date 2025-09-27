import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SocialistDemocracy from "./pages/socialist-democracy";
import BourgeoisDemocracy from "./pages/bourgeois-democracy";
import DemocracyGame from "./pages/mini-game";
import DemocracyQuiz from "./pages/quiz";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     {
      path: "/socialist-democracy",
      element: <SocialistDemocracy />,
     },
      {
      path: "/bourgeois-democracy",
      element: <BourgeoisDemocracy />,
     },
     {
      path: "/mini-game",
      element: <DemocracyGame />,
     },
     {
      path: "/quiz",
      element: <DemocracyQuiz />,
     }

      
    ],
    },
]);