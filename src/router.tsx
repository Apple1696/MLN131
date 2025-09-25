import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SocialistDemocracy from "./pages/socialist-democracy";
import BourgeoisDemocracy from "./pages/bourgeois-democracy";


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

      
    ],
    },
]);