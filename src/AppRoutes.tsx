import { createBrowserRouter } from "react-router-dom";
import { Top } from "./screens/Top";
import { Vote } from "./screens/Vote";

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "vote", element: <Vote /> },
]);