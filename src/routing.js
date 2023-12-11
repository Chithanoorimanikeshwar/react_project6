import { createBrowserRouter } from "react-router-dom";
import MealTypesList from './components/mealtypeslist'
import MealTypeList from "./components/mealtypelist";
import MealRecipe from "./components/mealrecipe";
import Root from "./root";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<MealTypesList/>
            },
            {
                path:"/foodtypes/:foodtype",
                element:<MealTypeList/>
            },
            {
                path:"/foodrecipe/:id",
                element:<MealRecipe/>
            }
        ]
    }
])
export default routes