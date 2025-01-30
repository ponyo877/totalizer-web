import { createBrowserRouter } from "react-router-dom";
import { Top } from "./screens/Top";
import { Vote } from "./screens/Vote";
import { History } from "./screens/History";

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "vote", element: <Vote /> },
  { path: "history", element: <History /> },
]);