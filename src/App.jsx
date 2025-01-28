import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './ui/Home'
import Error from './ui/Error'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {
    action as createOrderAction,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import { action as updateOrderAction } from './features/order/UpdateOrder'
import AppLayout from './ui/AppLayout'

//In the new react router, since v6.4, if we want to use the powerful API like data loaders, data actions or data fetchers,
//We need to create a new router using the syntax below.
//This is a function where we define our routes.
//We do that by passing in an array of objects where each object is one route.
const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                { path: '/', element: <Home /> },
                {
                    path: '/menu',
                    element: <Menu />,
                    loader: menuLoader,
                    errorElement: <Error />,
                },
                { path: '/cart', element: <Cart /> },
                {
                    path: '/order/new',
                    element: <CreateOrder />,
                    action: createOrderAction,
                },
                {
                    path: '/order/:orderId',
                    element: <Order />,
                    loader: orderLoader,
                    errorElement: <Error />,
                    action: updateOrderAction,
                },
            ],
        },
    ],
    {
        basename: '/react-pizza', // Add the base path here
    }
)


//Here we provide that router object using the RouterProvider component
function App() {
    return <RouterProvider router={router} />
}
export default App
