import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Booking from "../Pages/Bookings/Booking";
import PrivateRoute from "./PrivateRoute";
import OurTeam from "../Pages/Team/OurTeam/OurTeam";
import Testimonial from "../Pages/Testimonial/Testimonial";
import DetailsServices from "../Pages/DetailsServices/DetailsServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourteam",
        element: <OurTeam></OurTeam>,
      },
      // {
      //   path: "testimonial",
      //   element: <Testimonial></Testimonial>,
      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "book/:id",
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(
            `https://car-repair-server-ten.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: <DetailsServices></DetailsServices>,
        loader: ({ params }) =>
          fetch(
            ` https://car-repair-server-ten.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
