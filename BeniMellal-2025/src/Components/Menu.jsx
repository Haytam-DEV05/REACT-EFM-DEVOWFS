import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router";
import ListeDesEquipes from "./ListeDesEquipes";
import ListeDesMatchs from "./ListeDesMatchs";

export default function Menu() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ListeDesEquipes />,
        },
        {
          path: "ListeDesMatchs/:id",
          element: <ListeDesMatchs />,
        },
      ],
    },
  ]);
  function Layout() {
    return (
      <>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            minHeight: "70px",
            backgroundColor: "red",
          }}
        >
          <div className="logo">
            <h2>❤️</h2>
          </div>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "white",
              textDecoration: isActive ? "underline" : "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Liste Des Equipes
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={route} />;
}
