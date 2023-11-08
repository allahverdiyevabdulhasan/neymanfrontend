import React from 'react';
import "./Components/AccordionItem/AccordionItem.scss"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/route';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
      <RouterProvider router={router}>
      </RouterProvider>

     
   
  );
}
export default App;



