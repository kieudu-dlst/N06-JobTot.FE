import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./root-layout.jsx";
import CandidateApp from "./candidate-app.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <CandidateApp /> }],
  },
]);
