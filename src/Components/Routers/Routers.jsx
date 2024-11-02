import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Coffe from "../Coffe/Coffe";
import DashBoard from "../DahBoard/DashBoard";
import HomePage from "../HomePage/HomePage";
import CategoryCard from "../CategoryCard/CategoryCard";
const routers = createBrowserRouter([

    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<HomePage></HomePage>,
          loader:()=> fetch('../categories.json'),
          children:[
            {
              path:'/',
              loader:()=> fetch('../coffees.json'),
              element:<CategoryCard></CategoryCard>
            },
            {
              path:'/category/:category',
              loader:()=> fetch('../coffees.json'),
              element:<CategoryCard></CategoryCard>
            }
          ]
        },
        {
          path:'/coffe',
          element:<Coffe></Coffe>,
        },
        {
          path:'/deshboard',
          element:<DashBoard></DashBoard>
        },
      ]
    },
  ]);
  export default routers;