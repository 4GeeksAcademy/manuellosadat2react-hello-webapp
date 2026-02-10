import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { AddContact } from "./pages/AddContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      {/* Home */}
      <Route index element={<Home />} />

      {/* Add Contact */}
      <Route path="add" element={<AddContact />} />

      {/* Other routes */}
      <Route path="single/:theId" element={<Single />} />
      <Route path="demo" element={<Demo />} />

    </Route>
  )
);
