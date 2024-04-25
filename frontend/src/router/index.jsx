import { createBrowserRouter } from "react-router-dom";
import { ErrorView } from "../views/ErrorView";
import { MainView } from "../views/MainView";
import { TematicaView } from "../views/TematicaView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/tematica",
        element: <TematicaView />,
      },
    ]
  },
]);
