import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Team from './pages/Team'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
  },
  {
    path:'/team',
    element:<Team />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
