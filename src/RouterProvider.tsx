import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom'

import Gif from './components/Gif'
import GiphySdk from './components/GiphySdk'
import GiphyApi from './components/GiphyApi'
import Home from './components/Home'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: '/giphy-sdk',
    Component: Layout,
    children: [
      {
        index: true,
        Component: GiphySdk,
      },
    ],
  },
  {
    path: '/giphy-api',
    Component: Layout,
    children: [
      {
        index: true,
        Component: GiphyApi,
      },
      {
        path: ':gifId',
        Component: Gif,
      },
    ],
  },
])

function RouterProvider () {
  return (
    <ReactRouterProvider router={router} />
  )
}

export default RouterProvider