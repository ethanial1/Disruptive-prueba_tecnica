import { createBrowserRouter } from "react-router-dom";
import { ErrorView } from "../views/ErrorView";
import { MainView } from "../views/MainView";
import { TematicaGrid } from "../features/tematica/TematicaGrid";
import { TematicasGrid } from "../features/tematica/TematicasGrid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <TematicasGrid />,
      },
      {
        path: "/tematica",
        element: <TematicaGrid />,
      },
    ]
  },
]);
