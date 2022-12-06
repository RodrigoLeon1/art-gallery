import { createBrowserRouter } from "react-router-dom";
import ArtworkItem from "../pages/ArtworkItem/ArtworkItem";
import Error from "../pages/Error";
import Home from "../pages/Home";

export enum Routes {
  HOME = "/",
  ARTWORK = "/artwork",
  ARTWORK_ITEM = "/artwork/:artworkId",
}

export const appRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: Routes.ARTWORK_ITEM,
    element: <ArtworkItem />,
    errorElement: <Error />,
  },
]);
