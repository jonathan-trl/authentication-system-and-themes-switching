import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedLayout>
                <Home />
            </ProtectedLayout>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const Routes = () => {
    return <RouterProvider router={BrowserRouter} />;
};

export default Routes;
