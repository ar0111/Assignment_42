import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Main from './Layout/Main'
import UserDetails from './components/UserDetails/UserDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: '/users/:id',
          element: <UserDetails></UserDetails>,
          loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
