import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine"
import Home from "../Components/Pagses/Home/Home";
import Products from "../Components/Pagses/Products/Products";
import AddVideo from "../Components/AddVideo/AddVideo";
import Edits from '../Components/Edits/Edits'

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/products',
                element : <Products/>
            },
            {
                path : '/addVideo',
                element : <AddVideo/>
            },
            {
                path : '/editVideo/:id',
                element : <Edits/>,
                loader : ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])