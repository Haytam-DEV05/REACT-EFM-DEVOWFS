import ListeLivre from "./ListeLivre";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router";
import CalcPoids from "./CalcPoids";
export default function Menu() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ListeLivre /> },
        { path: "CalcPoids", element: <CalcPoids /> },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <nav>
          <NavLink to="/">ListeLivre</NavLink>
          <NavLink to="/CalcPoids">CalcPoids</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={router}></RouterProvider>;
}
